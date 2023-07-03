//import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import Header from "../components/Header"
import logo from "../assets/logo.png"
import styles from "../styles/Dashboard.module.css"

const Search = () => {
    useEffect(() => {
        try{
            const headers = {
                "Content-Type": "application/json",
                'Cache-Control': 'no-cache',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }

            const config = {
                headers: headers
            }

            axios.get('https://wits.worldbank.org/trade/comtrade/en/country/ALL/year/2021/tradeflow/Exports/partner/WLD/product/040120', config)
            .then(res => {
                console.log(res)
            }
            ).catch(err => {
                console.log(err)
            }
            )
            

        } catch(err) {
            console.log(err)
        }

    })

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
                    <form>
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

                                <div className={styles.rowTwo}>
                                    <button type="submit">Search </button>
                                </div>

                            </div>
                        </div>
                    </form>

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