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
                           Search Kenya&apos;s Trade Data with our one stop data solution.
                        </p>
                    </div>
                </div>

                <div className={styles.searchPage}>
                    <div className={styles.searchBox}>
                        <div>
                            <h3>SEARCH DATA</h3>
                        </div>
                        <div className={styles.rowHolder}>
                            {/* FIRST ROW */}
                            <div className={styles.rowOne}>
                                <div className="row-item">
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="">Reporter</label>
                                        <select name="" id="">
                                            <option value="" selected> Kenya </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row-item">
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="">Year</label>
                                        <select name="" id="">
                                            <option value="" selected> Kenya </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row-item">
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="">Trade Flow</label>
                                        <select name="" id="">
                                            <option value="" selected> Kenya </option>
                                        </select>
                                    </div>
                                </div>
                                
                            </div>

                            {/* SECOND ROW */}
                            <div className={styles.rowTwo}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="">Partner</label>
                                    <select name="" id="">
                                        <option value="" selected> Kenya </option>
                                    </select>
                                </div>
                            </div>

                            {/* THIRD ROW */}
                            <div className={styles.rowTwo}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="">HS CODE</label>
                                    <select name="" id="">
                                        <option value="" selected> Kenya </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.searchBox}>
                        <div>
                            <h3>SEARCH DATA STATUS</h3>
                        </div>
                        <div>
                            <h1>Searching...</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search