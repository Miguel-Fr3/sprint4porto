import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    <main className="login">
      <div className="form">
        <form className="formulario">
          <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
          <h1>Acessar Conta</h1>
          <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
          <input type="text" id="Cpf" placeholder="CPF ou CNPJ" />
          <div className="register">
            <input type="submit" id="logar" value="Entrar" />
          </div>
          <div className="check">
            <input type="checkbox" id="check" /> 
            <label htmlFor="check">Lembre de mim</label> 
          </div>
          <Link href="#">Sou novo aqui</Link>
        </form>
      </div>
    </main>
  )
}
