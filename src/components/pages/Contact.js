import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Form from '../form/Form'
import styles from "./Contact.module.css"

function Contact() {
    return (
        <section className={styles.section}>
            <nav>
                <p className={styles.pp}>Clique nos links</p>
                <ul>
                    <li><a href="https://www.instagram.com/tmazleo/" className={styles.a1}><FaInstagram /></a></li>
                    <li><a href="https://wa.me/message/4ZXM4NMLLBILC1" className={styles.a2}><FaWhatsapp /></a></li>
                </ul>
                
            </nav>
            <div>
            <p className={styles.pp}>Ou envie uma mensagem e logo retornarei o contato..</p>
            <Form />
            </div>
        </section>

    )
}

export default Contact