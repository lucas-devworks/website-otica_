import estilos from './SecaoSobre.module.css';
import Image from 'next/image';

import imagem1 from '../../../public/loja.png'
import imagem2 from '../../../public/atendimento.png'

export default function SecaoSobre() {
    return (
        <section className={estilos.container_pai} id='Sobre'>
            <div className={estilos.subtitulo}>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de</p>
                <p>renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>

            <div className={estilos.container_4_cards}>

                <div>
                    <Image src={imagem1} className={estilos.imagens}/>
                </div>
                <div>
                    <h3>NOSSAS FILIAIS</h3>
                    <span>Hoje temos mais de 200 filiais pelo Brasil e na América</span>
                </div>
                <div>
                    <h3>ATENDIMENTO FLEXÍVEL</h3>
                    <span>Nossa equipe é treinada para te atender</span>
                </div>
                <div>
                    <Image src={imagem2} className={estilos.imagens}/>
                </div>

            </div>

        </section>
    )
}