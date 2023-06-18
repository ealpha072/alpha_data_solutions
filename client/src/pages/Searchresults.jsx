import Header from "../components/Header"
import logo from "../assets/logo.png"
import styles from "../styles/Dashboard.module.css"

const Searchresults = () => {
    return (
        <div className={styles.mainContainer}>
            <Header logo={logo} styles={styles}/>


            <div className={styles.homeContainer}>
                <div className={styles.homeDiv}>
                    <div>
                        <h1>Your Data is Ready...</h1>
                        <p>
                           Search Kenya&apos;s Trade Data with our one stop data solution.
                        </p>
                    </div>

                    <div className={styles.searchPage}>
                        <div className={styles.searchBox}>
                            <div>
                                <h3>SEARCH DATA RESULTS</h3>
                            </div>
                            <div className={styles.resultsHolder}>
                                <h1>Kenya trade imports in 209 totalled </h1>

                                {/* Download icon */}
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Reporter</th>
                                            <th>Trade Flow</th>
                                            <th>Product Code</th>
                                            <th>Product Description</th>
                                            <th>Year</th>
                                            <th>Partner</th>
                                            <th>Trade Value</th>
                                            <th>Quantity</th>
                                            <th>Quantity Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Row 1, Cell 1</td>
                                            <td>Row 1, Cell 2</td>
                                            <td>Row 1, Cell 3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchresults