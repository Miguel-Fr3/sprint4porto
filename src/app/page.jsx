import Image from 'next/image'
import './Home.scss'
export default function Home() {
  return (
    <main className="home-page">
    <section>
        <div className="superior">
          <div>
            <h1>Guincho 24 horas</h1>
            <p>
              Guinchos ilimitados, sem limite de quilometragem. <br />
              Reparos do carro Reparo rápido e Supermartelinho de Ouro.
            </p>
          </div>
          <Image src="/img3.png" alt="Desenho de Guincho" width={320} height={200} priority={true} className="imgC"/>
          
        </div>
      </section>
    </main>

  )
}
