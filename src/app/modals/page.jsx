import "./modals.scss"
import Image from "next/image"
export default function Modals() {
  return (
    <main className="modal">

            <section className="conteudo">
                <div className="modals">
                <Image src="/img5.png" alt="Guincho Leve" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Guincho Leve</h1>
                    <p>
                        Utilizado para veículos de pequeno porte, como carros de passeio e motocicletas, em casos de pane mecânica, elétrica, pneu furado, entre outros.
                    </p>
                </div>
                <div className="modals">
                <Image src="/img4.png" alt="Guincho Pesado" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Guincho Pesado</h1>
                    <p>
                    Destinado a veículos de maior porte, como caminhões e ônibus, utilizado em casos de panes mecânicas, acidentes ou remoção do veículo.
                    </p>
                </div>
                <div className="modals">
                <Image src="/img6.png" alt="Guincho Plataforma" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Guincho Plataforma</h1>
                    <p>
                    Possui uma plataforma elevatória para transportar veículos com rodas travadas, danificados em acidentes ou quando não é possível rebocar o veículo normalmente.
                    </p>
                </div>
                <div className="modals">
                <Image src="/img10.png" alt="Guincho para Veículos Especiais" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Guincho para Veículos Especiais</h1>
                    <p>
                    Projetado para transportar veículos especiais, como trailers, motorhomes e embarcações, levando em consideração suas características e dimensões únicas.
                    </p>
                </div>
                <div className="modals">
                <Image src="/img1.png" alt="Guincho 24 Horas" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Guincho 24 Horas</h1>
                    <p>
                    Serviço disponível 24 horas por dia, todos os dias da semana, garantindo assistência em casos de emergência a qualquer momento.
                    </p>
                </div>
                <div className="modals">
                <Image src="/img9.png" alt="Guincho para Veículos 4x4" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Guincho para Veículos 4x4</h1>
                    <p>
                    Especializado em reboques de veículos com tração nas quatro rodas, adequado para situações off-road e terrenos difíceis.

                    </p>
                </div>
                <div className="modals">
                <Image src="/img2.png" alt="Reboque para Concessionária" width={600} height={300} priority={true} className="imgM"/>
                    <h1>Reboque para Concessionária</h1>
                    <p>
                    Serviço direcionado para levar o veículo diretamente a uma concessionária para reparo ou manutenção.

                    </p>
                </div>
            </section>
        </main>
  )
}
