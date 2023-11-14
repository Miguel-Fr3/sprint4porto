"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./login.scss"



export default function Login() {



  const [msgstatus, setMsgStatus] = useState("");
  const [classLoginMsg, setClassLoginMsg] = useState("");

  const [usuario, setUsuario] = useState({
    "info": "login",
    "cpf": "",
    "senha": ""
  });

  useEffect(() => {
    if (msgstatus === "Login realizado com SUCESSO!") {
      setClassLoginMsg("login-suc");
    } else if (msgstatus === "USUÁRIO E OU SENHA INVÁLIDOS!") {
      setClassLoginMsg("login-err");
    } else {
      setClassLoginMsg("login");
    }
  }, [msgstatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        if (response.ok) {
            const user = await response.json();

            if (user) {
                const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

                sessionStorage.setItem("token-user", token);

                setMsgStatus("Login realizado com SUCESSO!");

                setTimeout(() => {
                    setMsgStatus("");
                    router.replace("/ajuda");
                }, 5000);
            } else {
                setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
                setTimeout(() => {
                    setMsgStatus("");
                    setUsuario({
                        "info": "login",
                        "cpf": "",
                        "senha": "",
                    });
                }, 5000);
            }
        } else {
            console.error("Erro na solicitação:", response.statusText);
            setMsgStatus("Erro durante o login. Por favor, tente novamente.");
            setTimeout(() => {
                setMsgStatus("");
            }, 5000);
        }
    } catch (error) {
        console.error("Erro durante a solicitação:", error);
        setMsgStatus("Erro durante a solicitação. Por favor, tente novamente.");
        setTimeout(() => {
            setMsgStatus("");
        }, 5000);
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
