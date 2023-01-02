import styles from './Form.module.css'

function Form () {
    function envio () {
        const btn = document.getElementById('sub');
        const input = document.getElementById('name').value;



        btn.addEventListener('click', () => {
            if(input) {
                alert("Opa, ja vou te responder!")
            } else {
                alert("Preencha os campos")
            }
        })
    }
    return (
        <form action="https://api.staticforms.xyz/submit" method="POST" className={styles.form}>

        <input type="hidden" name="accessKey" value="e73b6668-9731-4f54-8851-780a6e6a2a78"/>
        <input type="hidden" name="redirectTo" value="http://localhost:3000/"></input>
            <div className={styles.divv}>
                <label for="name">Seu nome: </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className={styles.divv}>
                <label for="email">Seu e-mail: </label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className={styles.divv}>
                <label for="textArea">Agora, o motivo do contato: </label>
                <textarea name="message" id="textArea" required spellcheck ></textarea>
            </div>

            <input type="submit" id="sub" onClick={envio} />
        </form>
    )
}

export default Form