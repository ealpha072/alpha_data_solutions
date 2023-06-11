import styles from "../styles/Login.module.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <div className={styles.logoDiv}>
                    <img src={logo} alt="" />
                </div>

                <h2>Welcome Back</h2>

                <div className={styles.formHolder}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Enter email address" />
                </div>

                <div className={styles.formHolder}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" />
                </div>

                <button className={styles.btn}>Login</button>
                <h4>
                    Dont have an Account ? <Link to={"/signup"}>Sign up</Link>
                </h4>
                <h4>
                    Go<Link to={"/"}> Home</Link>
                </h4>

            </form>
        </div>
    </div>
  );
}

export default Login