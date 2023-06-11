import styles from "../styles/Dashboard.module.css"
import logo from "../assets/logo.png"
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <nav>
                <div>
                    <img src={logo} alt="" width={'55px'}/>
                </div>

                <div  className={styles.actions}>
                    <div>
                        <Link to='/'>Profile Info</Link>
                    </div>
                    <div>
                        <Link to='/'>Log out</Link>
                    </div>
                </div>
            </nav>

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
                    <Link>Data Search</Link>
                </div>

                <div className={styles.pastResults}>
                    <div className={styles.header}>
                        <h1>Past Search Results</h1>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home