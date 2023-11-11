"use client";
import React, { useEffect, useState }from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./login.scss"

import { useRouter } from "next/navigation";

export default function Login() {
  
    //Utilizando o redirecionamento quando estamos no cliente:
    const navigate = useRouter();

    const [msgstatus, setMsgStatus] = useState("");
    const [classLoginMsg, setClassLoginMsg] = useState("");

    //Criando um useState para comportar o usuário:
    const [usuario, setUsuario] = useState({
        "info":"login",
        "cpf":"",
        "senha":""
    });

    useEffect(() => {
       if(msgstatus == "Login realizado com SUCESSO!"){
          setClassLoginMsg("login-suc");
        }else if(msgstatus == "USUÁRIO E OU SENHA INVÁLIDOS!"){
            setClassLoginMsg("login-err");
        }else{
            setClassLoginMsg("login");
        }
    }, [msgstatus]);
    
    //Função de preenchimento do FORM...
    const handleChange = (e)=>{
        //Destructuring
        const{name, value} = e.target;
        //Prenchendo o campo, utilizando o useState com SPREAD + OnChange:
        setUsuario({...usuario,[name]:value});
    }

    //Função de validação e ENVIO dos dados.
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users/0",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const user = await response.json();

                if(user){

                    //Gerando o token do usuário:
                    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

                    //Armazenar o token no sessionStorage:
                    sessionStorage.setItem("token-user",token);

                    setMsgStatus("Login realizado com SUCESSO!");
                    
                    setTimeout(()=>{
                        setMsgStatus("");
                        navigate.push("/");
                    },5000);
                }else{
                    setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setUsuario({
                            "info":"login",
                            "cpf":"",
                            "senha":""
                        });
                    },5000);
                }
            }
        } catch (error) {
      }
    }

  return (
    <main className="login">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit}>
          <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
          <h1>Acessar Conta</h1>
          <div>
            <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="Cpf" placeholder="CPF ou CNPJ" value={usuario.cpf} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="Senha"></label>
            <input type="password" id="Senha" placeholder="Senha" value={usuario.senha} onChange={handleChange}/>
          </div>
          <div className="register">
            <input type="submit" id="logar" value="Entrar" />
          </div>
          <Link href="/login/cadastro">Sou novo aqui</Link>
        </form>
      </div>
    </main>
  )
}
