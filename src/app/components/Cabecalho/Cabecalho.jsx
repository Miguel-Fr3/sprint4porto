import Image from 'next/image'
import Link from 'next/link'
export default function Cabecalho() {
  return (
    <header>
        <div>
            <Image src="/Logo.png" alt="Logo Porto" width={200} height={200}/>
        </div>
        <nav>
          <ul>
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
    </header>
  )
}
