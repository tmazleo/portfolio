
import styles from './Projects.module.css'



function Projects() {
    return (
        <section className={styles.section}>
            <h2>Esses são alguns pequenos projetos Web</h2>

            <div className={styles.cards}>
                <div className={styles.card}  >
                    <a href='https://leadingpagelt.netlify.app/'> </a>
                </div>
                <div className={styles.card}>
                    <a href='https://formulariolt.netlify.app/'> </a>
                </div>
                <div className={styles.card}>
                    <a href='https://leading2.netlify.app/'> </a>
                </div>
                <div className={styles.card}>
                    <a href='https://tmazleo.github.io/Calculadorajs/'> </a>
                </div>
                <div className={styles.card}>
                    <a href='https://tmazleo.github.io/shopix/'> </a>
                </div>
                <div className={styles.card}>
                    <a href='https://tmazleo.github.io/Conversor/'> </a>
                </div>
            </div>


        </section>
    )
}

export default Projects