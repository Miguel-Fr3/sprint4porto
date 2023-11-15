"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./login.scss"
import { useRouter } from 'next/navigation';


export default function Login() {

  const router = useRouter();

  const [loginstatus, setLoginStatus] = useState("");
  const [classLogin, setClassLogin] = useState("");

  const [usuario, setUsuario] = useState({
    "info":"login",
    "CPF":"",
    "senha":""
});

useEffect(() => {
  if(loginstatus == "Sucesso!"){
    setClassLogin("login-suc");
   }else if(loginstatus == "USUÁRIO E OU SENHA INVÁLIDOS!"){
    setClassLogin("login-err");
   }else{
    setClassLogin("login");
   }
}, [loginstatus]);

const handleChange = (e)=>{

  const{name ,value} = e.target;

  setUsuario({...usuario,[name]:value});
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch("http://localhost:8080/api/login/autenticar", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(usuario)
      });

      if (response.ok) {
        const user = await response.json();
    
        if (user) {
            setLoginStatus("Sucesso!");
    
            setTimeout(() => {
                setLoginStatus("");
                router.push("/");
            }, 5000);
        } else {
            const errorResponse = await response.json(); 
            setLoginStatus(errorResponse.mensagem || "Erro desconhecido");
            
            setTimeout(() => {
                setLoginStatus("");
                setUsuario({
                    "info": "login",
                    "CPF": "",
                    "senha": ""
                });
            }, 5000);
        }
    } else {

        const errorResponse = await response.json();
        setLoginStatus(errorResponse.mensagem || "Erro desconhecido");
        
        setTimeout(() => {
            setLoginStatus("");
            setUsuario({
                "info": "login",
                "CPF": "",
                "senha": ""
            });
        }, 5000);
    }
    
  } catch (error) {

      console.error("Erro ao processar a requisição:", error);
  }
};

  return (
    <main className="login">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit}>
          <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
          <h1>Acessar Conta</h1>
          <h2 className={classLogin}>{loginstatus}</h2>
          <div>
            <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="Cpf" name='CPF' placeholder="CPF ou CNPJ" value={usuario.CPF} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="Senha"></label>
            <input type="password" id="Senha" name='senha' placeholder="Senha" value={usuario.senha} onChange={handleChange} />
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
