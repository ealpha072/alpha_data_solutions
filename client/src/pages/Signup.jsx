import { useState } from "react";
import styles from "../styles/Login.module.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import useForm from "../Hooks/Formhook";

const Signup = () => {

    const initialState = {
        email:"",
        password:"",
        confirmPassword:""
    }

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <div>
            <div className={styles.formContainer}>
                <form action="" method="post" className={styles.form} onSubmit={handleSubmit} >
                    <div className={styles.logoDiv}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.formHolder}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" placeholder="Enter email address" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>

                    <div className={styles.formHolder}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleInputChange} />
                    </div>

                    <div className={styles.formHolder}>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder="Re-enter password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
                    </div>

                    <button className={styles.btn} type="submit">Sign up</button>
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