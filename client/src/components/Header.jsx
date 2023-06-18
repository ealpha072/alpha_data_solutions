import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="" width={"55px"} />
            </div>

            <div className={styles.actions}>
                <div>
                    <Link to="/">Profile Info</Link>
                </div>
                <div>
                    <Link to="/">Log out</Link>
                </div>
            </div>
        </nav>
  );
}

export default Header