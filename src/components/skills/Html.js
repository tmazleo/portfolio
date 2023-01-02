import { FaHtml5 } from "react-icons/fa"
import styles from './Html.module.css'


function Html() {
    return (
        <div className={styles.divs}>
            <FaHtml5 className={styles.html} />
            <p><span>HTML5:</span><br></br>O HTML é uma linguagem de marcação de hipertexto
                utilizada para estruturar uma página web.
                Aprendi sobre uso da semantica que, além de facilitar a busca e rankear uma página em mecanismos de busca,
                ele ajuda os leitores de tela para deficientes visuais.
            </p>
            <p>Web Designer Completo, HTML5, CSS3 e JavaScript - <b>projeto Ser Front-End/Udemy</b></p>
        </div>

    )
}

export default Html