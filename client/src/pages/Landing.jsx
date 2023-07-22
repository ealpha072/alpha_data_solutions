import styles from "../styles/Home.module.css"
//import logo from "../assets/logo.png"
//import banner from "../assets/banner.png"
import bannerTwo from "../assets/banner_two.jpg"
import {Link} from 'react-router-dom'
import Header from "../components/Header"

const Landing = () => {

    return (
        <div className='part_one'>
            <Header status={"FEATURES"}/>
            <div className={styles.backgroundDiv}>
                <div className={styles.blurOverlay}>
                    <div>
                        <h6>KENYA TRADE DATA</h6>
                        <h1>Access Kenya Trade Data faster.</h1>
                        <p>
                            Alpha Data Solutions transforms we access trade data 
                        </p>
                        <div className={styles.bannerBtns}>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"signup"}>Sign up</Link>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={bannerTwo} alt="" />
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Landing

/*

 <div className={styles.landingContainer}>
            <Header />
            <div className={styles.bannerDiv}>
                <div className={styles.formContainer}>
                    <h2>Welcome to Alpha Data Solutions</h2>
                    <h4>Login with your account to continue</h4>

                    <div className={styles.btnDiv}>
                        <Link to={"/login"}>Login</Link>
                        <Link to={"signup"}>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
*/