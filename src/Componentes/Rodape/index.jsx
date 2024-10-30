import estilos from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.copy}>
                <p>&copy; 2024 Óticas Vida - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}