import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Cabecalho.scss';


export default function Cabecalho({ currentPath }) {
  return (
    <header className='menu'>
        <div className='logo'>
            <Image src="/Logo.png" alt="Logo Porto" width={200} height={100} priority={true}/>
        </div>
        <nav className='menu-nav'>
          <div className='rotas'>
            
              <Link href="/" className={currentPath === '/' ? 'active' : ''}>
                Home
              </Link>
            
            
              <Link href="/ajuda" className={currentPath === '/ajuda' ? 'active' : ''}>
                Ajuda
              </Link>
            
            
              <Link href="/modals" className={currentPath === '/modals' ? 'active' : ''}>
                Modals
              </Link>
            
            
              <Link href="/sobre" className={currentPath === '/sobre' ? 'active' : ''}>
                Sobre nós
              </Link>
            
          </div>
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
