import styles from './Post.module.css'
import { SiPostgresql } from "react-icons/si"

function Post() {
    return (
        <div className={styles.divs}>
            <SiPostgresql className={styles.post} />
            <p><span>PostgreSQL:</span><br></br>O PostgreSQL é um gerenciador de banco de dados.
            Essa ferramenta pode ser essencial na criação e gerenciamento de aplicações, como sites e apps!
            </p>
            <p>Java Básico / Java Avançado - <b>Mentorama</b></p>
        </div>
    )
}

export default Post