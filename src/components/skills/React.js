import styles from './React.module.css'
import { FaReact } from "react-icons/fa"

function React() {
    return (
        <div className={styles.divs}>
            <FaReact className={styles.react} />
            <p><span>ReactJS:</span><br></br>O ReactJS é uma biblioteca JavaScript 
                para a criação de interfaces de usuário. Ela possibilita uma criação de componentes
                com elementos gráficos, organizando o código e trazendo uma página fluida e rápida
            </p>
            <p>Curso React - <b>Matheus Battisti Hora de Codar</b></p>
        </div>
    )
}

export default React