import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faContactBook, faExclamationTriangle, faMobile, faMoneyBill1Wave, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Ajuda() {
  return (
<main className="ajuda">

            <div className="help">
            <label htmlFor="ajuda">Como podemos te ajudar?</label>
            <input type="text" id="ajuda" placeholder="Pesquise o que você precisa aqui!" />
            </div>
            <div className="superior">
                <div><FontAwesomeIcon icon={faExclamationTriangle} className='icona'/><h1>Solicitar Socorro</h1></div>
                <div><FontAwesomeIcon icon={faContactBook} className='icona'/><h1>Contatos</h1></div>
                <div><FontAwesomeIcon icon={faCog} className='icona'/><h1>Editar dados</h1></div>
            </div>

        </main>
  )
}
