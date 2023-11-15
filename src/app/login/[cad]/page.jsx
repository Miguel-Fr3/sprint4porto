"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../login.scss';

export default function Cadastro() {

    const router = useRouter();

    const [cadstatus, setCadStatus] = useState("");
    const [classCadMsg, setClassCadMsg] = useState("");

    const [usuario, setUsuario] = useState({
        "info":"cadastro",
        "CPF":"",
        "senha":""
    });

    useEffect(() => {
       if(cadstatus == "Cadastrado!"){
          setClassCadMsg("login-suc");
        }else if(cadstatus == "OCORREU UM ERRO!"){
            setClassCadMsg("login-err");
        }else{
            setClassCadMsg("login");
        }
    }, [cadstatus]);
    

    const handleChange = (e)=>{

        const{name, value} = e.target;

        setUsuario({...usuario,[name]:value});
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            // const response = await fetch("http://localhost:8080/api/login",{
            //     method: "POST",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:  JSON.stringify(usuario)
            // });

            if(response.ok){
                const user = await response.json();

                if(user){
                    setCadStatus("Cadastrado!");
                    setTimeout(()=>{
                        setCadStatus("");
                        router.push("/login");
                    },5000);
                }else{
                    setCadStatus("OCORREU UM ERRO!");
                    setTimeout(()=>{
                        setCadStatus("");
                        setUsuario({
                            "info":"cadastro",
                            "CPF":"",
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
          <Link href="/login">
            <FontAwesomeIcon icon={faArrowLeft} className="flecha" />
          </Link>
          <h1>Cadastrar Conta</h1>
          <h2 className={classCadMsg}>{cadstatus}</h2>
          <div>
            <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="Cpf" name='CPF' placeholder="CPF ou CNPJ" value={usuario.CPF} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="Senha"></label>
            <input type="password" id="Senha" name='senha' placeholder="Senha" value={usuario.senha} onChange={handleChange} />
          </div>
          <div className="register">
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    </main>
  );
}
