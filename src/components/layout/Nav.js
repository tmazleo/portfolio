import { Link } from "react-router-dom"
import styles from './Nav.module.css'

function Nav () {
    return(
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/skills">Conhecimentos</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/contact">Contatos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav