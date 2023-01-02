import styles from './Js.module.css'
import { FaJsSquare } from "react-icons/fa"

function Js() {
    return (
        <div className={styles.divs}>
            <FaJsSquare className={styles.js} />
            <p><span>JavaScript:</span><br></br>O JavaScript é uma linguagem de programação leve
                orientada a objetos utilizada dentro de um ambiente host, ou seja, dentro de um navegador web.
                Com ela consigo criar efeitos, movimentações, calculos, formulários, etc.
                
            </p>
            <p>Web Designer Completo, HTML5, CSS3 e JavaScript - <b>projeto Ser Front-End/Udemy</b></p>
        </div>
    )
}

export default Js