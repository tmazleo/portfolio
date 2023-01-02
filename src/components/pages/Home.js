import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home () {
    return(
        <section className={styles.section}>
            <h2>Bem-vindo ao meu Portfólio!</h2>
  
                <p>Olá! Sou o Leonardo<br></br>Apresento a você meus conhecimentos em tecnologia.
                Estou iniciando o 4º semestre em Analise e Desenvolvimento de Sistemas na UNITOLEDO,
                e possuo alguns cursos técnicos, também na área de TI.<br></br>
                <Link className={styles.link} to="/skills">Clique aqui e veja meus conhecimentos!</Link><br></br><br></br>
                <span><i>Freelancer Web Front-end</i></span>
            </p>
            <figure>
                
            </figure>
          
            
        </section>
    )
}

export default Home