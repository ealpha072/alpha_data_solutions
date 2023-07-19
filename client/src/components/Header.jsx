//import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <div className={styles.logo}>
                        <img src={logo} alt="" width={"70"}/>
                        <h1>Alpha Data Solutions</h1>
                    </div>
                    <div className={styles.actions}>
                        <a href="#">HOME</a>
                        <a href="#">FEATURES</a>
                    </div>
                </div>
            </nav>
    </header>
  );
}

export default Header