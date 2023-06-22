import styles from "../styles/Login.module.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <div className={styles.logoDiv}>
                    <img src={logo} alt="" />
                </div>


                <div className={styles.formHolder}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Enter email address" />
                </div>

                <div className={styles.formHolder}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" />
                </div>

                <div className={styles.formHolder}>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder="Re-enter password" />
                </div>

                <button className={styles.btn}>Sign up</button>
                <h4>
                    Dont have an Account ? <Link to={"/login"}>Login</Link>
                </h4>
                <h4>
                    Go <Link to={"/"}>Home</Link>
                </h4>
            </form>
        </div>
    </div>
  );
}

export default Signup