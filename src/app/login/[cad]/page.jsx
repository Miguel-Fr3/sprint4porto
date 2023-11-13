import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../login.scss"

export default function Cadastro() {
  return (
    <main className="login">
    <div className="form">
    <form className="formulario">
    <Link href="/login"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
        <h1>Cadastrar Conta</h1>
        <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
        <input type="text" id="Cpf" placeholder="CPF ou CNPJ"/>
        <label htmlFor="Senha"></label>
          <input type="password" id="Senha" placeholder="Senha" />
        <div className="register">
            <input type="submit" value="Cadastrar"/>
        </div>

    </form>
    </div>
</main>
  )
}

