import styles from './Footer.module.css'

function Footer () {
    return(
        <div className={styles.container}>

            <ul>
                <li><a href="https://github.com/tmazleo">GitHub</a><div className={styles.git}></div></li>
                <li><a href="https://www.linkedin.com/in/leonardotomazb/">LinkedIn</a><div className={styles.linked}></div></li>
            </ul>
            <div className={styles.p}>
            <p className={styles.copy}>
                <span>Leonardo Tomaz</span> &copy; 2022
            </p>
            </div>
        </div>
    )
}

export default Footer