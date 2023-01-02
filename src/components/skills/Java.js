import styles from './Java.module.css'
import { FaJava } from "react-icons/fa"

function Java() {
    return (
        <div className={styles.divs}>
            <FaJava className={styles.java} />
            <p><span>Java:</span><br></br>Com o Curso Java Básico e Java Avançado da Mentorama, desenvolvi
            conhecimentos com POO, Spring Boot e JPA.
            </p>
            <p>Java Básico / Java Avançado - <b>Mentorama</b></p>
        </div>
    )
}

export default Java