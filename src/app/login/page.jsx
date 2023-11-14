"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./login.scss"
import { useRouter } from 'next/navigation';


export default function Login() {


  const router = useRouter();



  const [usuario, setUsuario] = useState({
    "info": "login",
    "cpf": "",
    "senha": ""
  });



  const handleChange = (e) => {
    const { cpf, value } = e.target;
    setUsuario({ ...usuario, [cpf]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/api/login/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            mode: 'cors',
            body: JSON.stringify(usuario),
        });

        if (response.ok) {
            const user = await response.json();

            if (user) {
                const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

                sessionStorage.setItem("token-user", token);

            } else {
                
                    setUsuario({
                        "info": "login",
                        "cpf": "",
                        "senha": "",
                    });

            }
        } else {
            console.error("Erro na solicitação:", response.statusText);

        }
    } catch (error) {
        console.error("Erro durante a solicitação:", error);

    }
};


  return (
    <main className="login">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit}>
          <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
          <h1>Acessar Conta</h1>
          <div>
            <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="Cpf" name='cpf' placeholder="CPF ou CNPJ" value={usuario.cpf} onChange={handleChange} />
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
