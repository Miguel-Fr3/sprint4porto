'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Cabecalho.scss';
import { usePathname } from 'next/navigation';


export default function Cabecalho() {

  const pathname = usePathname();

  return (
    <header className='menu'>
        <div >
            <Image src="/Logo.png" alt="Logo Porto" width={100} height={50}  priority={true} className='logo'/>
        </div>
        <nav className='menu-nav'>
          <div className='rotas'>
            
              <Link href="/" className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            
            
              <Link href="/ajuda" className={pathname === '/ajuda' ? 'active' : ''}>
                Ajuda
              </Link>
            
            
              <Link href="/modals" className={pathname === '/modals' ? 'active' : ''}>
                Modals
              </Link>
            
            
              <Link href="/sobre" className={pathname === '/sobre' ? 'active' : ''}>
                Sobre nós
              </Link>
            
          </div>
        </nav>
        <div className="icon">
          <Link href="/ajuda" >
            <FontAwesomeIcon icon={faSearch} className="lupa" />
          </Link>
          <Link href="/login">
            <FontAwesomeIcon icon={faUserCircle} className="usuario" />
          </Link>
        </div>
    </header>
  )
}
