import estilos from './SecaoProdutos.module.css';
import Image from 'next/image';
import oculos1 from '../../../public/oculos01.png';
import oculos2 from '../../../public/oculos02.png';
import oculos3 from '../../../public/oculos03.png';
import oculos4 from '../../../public/oculos04.png';

export default function SecaoProdutos() {
    return (
        <section className={estilos.container_pai} id='Produtos'>

            <div className={estilos.subtitulo}>
                <h2>NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className={estilos.container_imagens}>
                <figure>
                    <figcaption>Óculos de grau</figcaption>
                    <Image src={oculos1} className={estilos.imagens}/>
                    <span>R$ 500,00</span>
                </figure>

                <figure>
                    <figcaption>Óculos transition</figcaption>
                    <Image src={oculos2} className={estilos.imagens}/>
                    <span>R$ 750,00</span>
                </figure>

                <figure>
                    <figcaption>Óculos de sol</figcaption>
                    <Image src={oculos3} className={estilos.imagens}/>
                    <span>R$ 700,00</span>
                </figure>

                <figure>
                    <figcaption>Óculos infantil</figcaption>
                    <Image src={oculos4} className={estilos.imagens}/>
                    <span>R$ 500,00</span>
                </figure>
            </div>

            <div className={estilos.lista}>
                <div>
                    <ul>
                    <p>Todos os nossos produtos incluem:</p>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        

        </section>
    )
}