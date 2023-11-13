import Image from "next/image"
import './Sobre.scss'
export default function Sobre() {
  return (
<main className="sobre">

            <div className="pp">
                <h1 className="proposito">Nosso propósito é</h1>
                <h1 className="porto">Ser um porto seguro para as pessoas</h1>
            </div>
            <div className="inferior">
            <div className="colab">
                <h1>Colaboradores</h1>
                <h2>rm99977 - Alberto Seiji <br />

                rm551997 - Matheus Rodrigues <br />

                rm99997 - Miguel Fernandes <br />

                rm551521 - Patrick Jaguski <br />

                rm552213 - Ye</h2> <br />
                <nav>
                <a href="https://github.com/Miguel-Fr3/sprint4porto" target="_blank">Saiba mais</a>
                </nav>
                </div>
                <div className="historia">
                <Image src="/img0.png" alt="Fachada porto" width={600} height={300} priority={true} className="imgS"/>
                    <h1>Conheça nossa história</h1>
                    <h2>
                    Em 1945, a Porto é fundada, em São Paulo/SP, contando com cerca de 50 funcionários.
                    </h2>

                <div className="botao">
                    <a href="https://www.portoseguro.com.br/institucional/a-porto-seguro/historia" target="_blank">Conheça mais</a>
                </div>
                </div>
                </div>
        </main>
  )
}
