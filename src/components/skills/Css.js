import { FaCss3Alt } from "react-icons/fa"
import styles from './Css.module.css'


function Css() {
    return (
        <div className={styles.divs}>
            <FaCss3Alt className={styles.css} />
            <p><span>CSS3:</span><br></br>O CSS é uma folha de estilo em cascata. são códigos
                utilizados para dar estilo a uma página web, também essencial!
                Com ele, é possível criar uma página chamativa e com cores harmônicas.
            </p>
            <p>Web Designer Completo, HTML5, CSS3 e JavaScript - <b>projeto Ser Front-End/Udemy</b></p>
        </div>

    )
}

export default Css