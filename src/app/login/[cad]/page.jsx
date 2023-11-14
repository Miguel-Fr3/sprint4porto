import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../login.scss"

export default function Cadastro() {
  const router = useRouter();

  const [msgstatus, setMsgStatus] = useState("");
  const [classLoginMsg, setClassLoginMsg] = useState("");

  //Criando um useState para comportar o usuário:
  const [usuario, setUsuario] = useState({
    "id":"",
    "CPF":"",
    "senha":""
  });

  
  const handleChange = (e)=>{

      const{name, value} = e.target;

      setUsuario({...usuario,[name]:value});
  }

  const handleSubmit = async (e)=>{
      e.preventDefault();
      
      try {
          const response = await fetch("http://localhost:8080/api/login",{
              method: "POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:  JSON.stringify(usuario)
          });

          if(response.ok){
              const user = await response.json();

              if(user){
                  setMsgStatus("Cadastro Concluido");
                  setTimeout(()=>{
                      setMsgStatus("");
                      router.push("/");
                  },5000);
              }else{
                  setMsgStatus("algo esta errado");
                  setTimeout(()=>{
                      setMsgStatus("");
                      setUsuario({
                          "id":"",
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
    <main className="login" onSubmit={handleSubmit}>
    <div className="form">
    <form className="formulario">
    <Link href="/login"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
        <h1>Cadastrar Conta</h1>
        <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
        <input type="text" id="Cpf" placeholder="CPF ou CNPJ" value={usuario.CPF} onChange={handleChange}/>
        <label htmlFor="Senha"></label>
          <input type="password" id="Senha" placeholder="Senha" value={usuario.senha} onChange={handleChange} />
        <div className="register">
            <input type="submit" value="Cadastrar"/>
        </div>

    </form>
    </div>
</main>
  )
}

