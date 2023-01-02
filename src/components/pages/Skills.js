import styles from './Skills.module.css'



import Html from '../skills/Html'
import Css from '../skills/Css'
import Js from '../skills/Js'
import React from '../skills/React'
import Java from '../skills/Java'
import Post from '../skills/Post'

function Skills () {
    return (
        <section className={styles.section}>

               
        <div className={styles.diva}>
             <div className={styles.slide}>
                <Html />
                <Css />
                <Js />
                <React />
                <Java />
                <Post /> 
                
            </div>
        </div>
           
          

        </section>
    )
}

export default Skills