import Logo from "./logo/Logo"
import styles from './Header.module.css'
import Nav from "./Nav"

function Header () {
    return (
        <div className={styles.container}>
            <Logo />
            <Nav />
        </div>
    )
}
export default Header