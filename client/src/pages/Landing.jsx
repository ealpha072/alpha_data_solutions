import styles from "../styles/Home.module.css"
import logo from "../assets/logo.png"
import {Link} from 'react-router-dom'

const Landing = () => {

    return (
        <div className={styles.landingContainer}>
            <div className={styles.formContainer}>
                <div className={styles.logoDiv}>
                    <img src={logo} alt="" width={"75"} />
                </div>

                <h2>Welcome to Alpha Data Solutions</h2>
                <h4>Login with your account to continue</h4>

                <div className={styles.btnDiv}>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"signup"}>Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing