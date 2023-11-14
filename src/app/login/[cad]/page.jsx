"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../login.scss';

export default function Cadastro() {
  const router = useRouter();

  const [usuario, setUsuario] = useState({
    "info": "cadastro",
    "cpf": "",
    "senha": ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        const user = await response.json();

        if (user) {

            setUsuario({
                "info": "cadastro",
                "cpf": "",
                "senha": ""
            });
            router.push('/login');

        } else {

            setUsuario({
                "info": "cadastro",
                "cpf": "",
                "senha": ""
            });

        }
      } else {
        console.error('Erro na solicitação:', response.statusText);

      }
    } catch (error) {
      console.error('Erro durante a solicitação:', error);

    }
  };

  return (
    <main className="login">
      <div className="form">
        <form className="formulario" onSubmit={handleSubmit}>
          <Link href="/login">
            <FontAwesomeIcon icon={faArrowLeft} className="flecha" />
          </Link>
          <h1>Cadastrar Conta</h1>
          <div>
            <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="Cpf" name='cpf' placeholder="CPF ou CNPJ" value={usuario.cpf} onChange={handleChange} />
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
