import Link from 'next/link';
import estilos from './SecaoContatos.module.css';
import Image from  'next/image';
// imagens
import local from '../../../public/local.png';
import tel from '../../../public/telefone.png';
import email from '../../../public/email.png';
import fb from '../../../public/fb.png';
import ig from '../../../public/ig.png';
import tt from '../../../public/tt.png';

export default function SecaoContatos() {
    return (
    <main className={estilos.main}>
        <section className={estilos.container_pai} id='Contato'>
            <div className={estilos.subtitulo}>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

            <div className={estilos.container_links}>
                <nav>
                    <ul type='none'>
                        <h4>Contato</h4>
                            <li> 
                                <div><Image src={local}/></div>
                                <Link href='https://maps.app.goo.gl/Yi5BtdDg6WhVm9yy7' target='_blank'>Nova Iguaçu, RJ</Link>
                            </li>
                            <li>
                                <div><Image src={tel}/></div>
                                <Link href= 'tel:55319999-9999'>(31) 996987487 </Link>
                            </li>
                            <li>
                                <div><Image src={email}/></div>
                                <Link href='mailto:contato@oticavida.com' target='_blank'>contato@oticavida.com</Link>
                            </li>
                    </ul>
                </nav>

                <nav>
                    <ul type='none'>
                        <h4>Nossas Redes Sociais</h4>
                            <li>
                                <div><Image src={fb}/></div>
                                <Link href='#'>/OticaVida</Link> 
                            </li> 
                            <li> 
                                <div><Image src={ig}/></div>
                                <Link href='#'>@oticavidajr</Link>
                            </li>

                            <li> 
                                <div><Image src={tt}/></div>
                                <Link href='#'>@oticavidajr</Link>
                            </li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
    )
}