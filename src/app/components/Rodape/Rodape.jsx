import Image from "next/image"

export default function Rodape() {
  return (
    <>
      <footer>
      <Image src="/Logo.png" alt="Logo Porto" width={250} height={200} priority={true}/>
      </footer>
    </>
  )
}
