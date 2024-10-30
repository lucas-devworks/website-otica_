import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';
// links de navegação

export default function Topo() {
    return(
        <header className={estilos.cabecalho}>
            <div>
                <Image src={Logo} alt='Óticas Vida' title='Óticas Vidas - logo' className={estilos.logo}/>
            </div>

            <nav className={estilos.container_links}>
                <ul type='none'>
                    <li><Link href='#Produtos'>PRODUTO</Link></li>
                    <li><Link href='#Sobre'>SOBRE</Link></li>
                    <li><Link href='#Contato'>CONTATO</Link></li>
                </ul>
            </nav>

        </header>
    )
}