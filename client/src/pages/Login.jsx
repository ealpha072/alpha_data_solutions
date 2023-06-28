import { useState } from "react";
import styles from "../styles/Login.module.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import useForm from "../Hooks/Formhook";
import userService from "../services/user";

const Login = () => {
    const [loginMessage, setLoginmessage] = useState("")


    const initialState = {
        email:"",
        password:"",
    }

    const onSubmit = (formData) => {
        console.log(formData)
        userService.login(formData)
        .then(response => {
            console.log(response)
            //setLoginmessage(response.message)
        })
        .catch(err => {
            console.log(err.response.data.message)
            setLoginmessage(err.response.data.message)
        })
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form} method="post" onSubmit={handleSubmit}>
                    <div className={styles.logoDiv}>
                        <img src={logo} alt="" />
                    </div>

                    <h2>Welcome Back</h2>

                    {loginMessage && <div className={styles.errorDiv}><h3>{loginMessage}</h3></div> }

                    <div className={styles.formHolder}>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            autoComplete=""
                            type="email" 
                            placeholder="Enter email address" 
                            value={formData.email} 
                            name="email"
                            onChange={handleInputChange}
                            required 
                        />
                    </div>

                    <div className={styles.formHolder}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter password" 
                            value={formData.password} 
                            name="password"
                            onChange={handleInputChange}
                            required 
                        />
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