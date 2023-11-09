import Image from "next/image"
import './Rodape.scss'
export default function Rodape() {
  return (
    <>
      <footer className="rodape">
      <Image src="/Logo.png" alt="Logo Porto" width={320} height={200} priority={true} className="logo"/>
      </footer>
    </>
  )
}
