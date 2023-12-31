import { useState } from "react";
import styles from "../styles/Login.module.css"
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import useForm from "../Hooks/Formhook";
import userService from "../services/user";
import validatePass from "../utilities/utilities";


const Signup = () => {
    const navigate = useNavigate()
    const [signupMessage, setSignupmessage] = useState("")

    const initialState = {
        email:"",
        password:"",
        confirmPassword:""
    }
    const form = document.getElementById("signupForm")

    const onSubmit = (formData) => {
        console.log(formData)
        //compare passwords if they match
        const passwordValidation = validatePass(formData.password, formData.confirmPassword)
        if(passwordValidation !== "Password valid"){
            setSignupmessage(passwordValidation)
            setTimeout(() => {
                setSignupmessage("")
            }, 5000);
            return
        }else{
            userService.signUp(formData)
            .then(response => {
                console.log(response)

                const timeoutRedirect = setTimeout(()=>{
                    navigate('/login')
                }, 5000)
    
                setSignupmessage(`${response.message}. Taking you to login page in 5 seconds`)
                //reset form
                form.reset()

                //navigate to login page after 5 seconds
                return () =>{
                    clearTimeout(timeoutRedirect)
                };
            })
            .catch(err => {
                console.log(err)
                if(err.response){
                    setSignupmessage(`${err.response.data.message}. Try a different email address`)
                    setTimeout(() => {
                        setSignupmessage("")
                    }, 5000);
                    return
                }else{
                    setSignupmessage(`${err.message} Unable to reach server. Try again later`)
                    setTimeout(() => {
                        setSignupmessage("")
                    }, 5000);
                    return
                }
            })
        }
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)

    return (
        <div>
            <div className={styles.formContainer}>
                <form action="" method="post" className={styles.form} onSubmit={handleSubmit} id="signupForm">
                    <div className={styles.logoDiv}>
                        <img src={logo} alt="" />
                    </div>

                    {signupMessage && 
                        <div className={
                            signupMessage.includes('successfully') ? styles.successDiv: styles.errorDiv
                        }>
                            <h3>{signupMessage}</h3>
                        </div>
                    }

                    <div className={styles.formHolder}>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Enter email address" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required
                        />
                    </div>

                    <div className={styles.formHolder}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleInputChange}
                            required 
                        />
                    </div>

                    <div className={styles.formHolder}>
                        <label htmlFor="password">Confirm Password</label>
                        <input 
                            type="password" 
                            placeholder="Re-enter password" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleInputChange} 
                            required
                        />
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