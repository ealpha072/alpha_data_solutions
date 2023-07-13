import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import styles from "../styles/Logout.module.css"
import {BeatLoader} from 'react-spinners'

const Logout = () => {
    const navigate = useNavigate()
    const [countDown, setCountdown] = useState(5)

    useEffect(()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("data")

        const timeoutRedirect = setTimeout(()=>{
            navigate('/')
        }, 5000)

        const countDown = setInterval(()=>{
            setCountdown(previous => previous - 1)
        }, 1000)

        return () =>{
            clearTimeout(timeoutRedirect)
            clearInterval(countDown)
        };
    }, [navigate])

    return (
        <div className={styles.logout}>
            <h1>Successfully loged out, taking you to login page in {countDown} </h1>
            <BeatLoader color='#293745'/>
        </div>
    )
}

export default Logout