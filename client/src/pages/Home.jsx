import {useState,useEffect} from "react"
import styles from "../styles/Dashboard.module.css"
import logo from "../assets/logo.png"
import {Link, useNavigate} from 'react-router-dom'
import Header from "../components/Header"
import userService from "../services/user"

const Home = () => {
    const navigate = useNavigate()
    const [countryProfile, setCountryProfile] = useState("Fetching Country Profile ...")

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        if(!token){
            navigate("/login")
        }

        if(sessionStorage.getItem("countryProfile")){
            setCountryProfile(sessionStorage.getItem("countryProfile"))
            return
        }else{
            userService.getCountryProfile()
            .then(response => {
                //console.log(response.data.message)
                if(response.data.message){
                    setCountryProfile(response.data.message)
                    //save data to session storage
                    sessionStorage.setItem("countryProfile", response.data.message)
                }else{
                    setCountryProfile("No Country Profile Found")
                }
            })
            .catch(err => {
                console.log(err)
            })
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
                                <p>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Laborum voluptatibus 
                                    temporibus autem inventore deleniti sint 
                                    eveniet nulla laudantium obcaecati soluta 
                                    dolorum quasi, in magni ea nostrum pariatur 
                                    dolore quia numquam!
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className={styles.countryProfile}>
                        <div>
                            <h3>Country Trade Profile - Most Recent Values</h3>
                        </div>
                        <div>
                            <p>{countryProfile}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home