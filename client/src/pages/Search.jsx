//import { Link } from "react-router-dom"
import Header from "../components/Header"
import logo from "../assets/logo.png"
import styles from "../styles/Dashboard.module.css"

const Search = () => {
    return (
        <div className={styles.mainContainer}>
            <Header logo={logo} styles={styles}/>

            <div className={styles.homeContainer}>
                <div className={styles.homeDiv}>
                    <div>
                        <h1>Search Trade Data. Faster</h1>
                        <p>
                           Search Keny&apos;s Trade Data with our one stop data solution.
                        </p>
                    </div>
                </div>

                <div className={styles.searchDiv}>
                    <div className={styles.searchBox}>
                        <div>
                            <h3>SEARCH DATA</h3>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search