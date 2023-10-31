import Image from 'next/image'
import Link from 'next/link'
import "./Cabecalho.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Cabecalho() {
  return (
    <header className='menu'>
        <div className='logo'>
            <Image src="/Logo.png" alt="Logo Porto" width={200} height={200}/>
        </div>
        <nav className='menu-nav'>
          <ul className='rotas'>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Ajuda</Link>
            </li>
            <li>
              <Link href="#">Modals</Link>
            </li>
            <li>
              <Link href="#">Sobre nós</Link>
            </li>
          </ul>
        </nav>
        <div className="icon">
          <Link href="#">
            <FontAwesomeIcon icon={faSearch} className="lupa" />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faUserCircle} className="usuario" />
          </Link>
        </div>
    </header>
  )
}
