//import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import styles from "../styles/Header.module.css"
/* eslint-disable react/prop-types */

const Header = ({status}) => {
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
                        <a href={`/${status}`}>{status}</a>
                    </div>
                </div>
            </nav>
            <hr />
    </header>
  );
}

export default Header