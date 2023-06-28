import {useEffect} from "react"
import styles from "../styles/Dashboard.module.css"
import logo from "../assets/logo.png"
import {Link, useNavigate} from 'react-router-dom'
import Header from "../components/Header"

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
            navigate("/login")
        }
    }, [navigate])

    return (
        <div className={styles.mainContainer}>
            <Header  logo={logo} styles={styles} />

            <div className={styles.homeContainer}>
                <div className={styles.homeDiv}>
                    <div>
                        <h1>Get Trade Data. Faster</h1>
                        <p>
                           Get Kenya Trade Data with our one stop data solution.
                        </p>
                    </div>
                </div>

                <div className={styles.searchDiv}>
                    <div className={styles.pastResults}>
                        <div className={styles.button}>
                            <Link to="/search">Data Search</Link>
                        </div>
                        <div className={styles.past}>
                            <div>
                                <h3>Past Results</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.countryProfile}>
                        <div>
                            <h3>Country Trade Profile</h3>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Home