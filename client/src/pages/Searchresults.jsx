import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
//import CsvDownloadButton from 'react-json-to-csv'
import Header from "../components/Header"
import styles from "../styles/Dashboard.module.css"
import ModalOverlay from "../components/Modal"

const Searchresults = () => {

    const navigate  = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if(!token){
            navigate("/login")
        }
    }, [navigate])

    const [isOpen, setisOpen] = useState(false)

    const openModal = () => {setisOpen(true)}
    const closeModal = () => {setisOpen(false)}

    //get data from session storage
    const data = JSON.parse(sessionStorage.getItem("data"))
    const mainData = data.data.data[0]  //get the first object in the array

    console.log(data)

    return (
        <div className={styles.mainContainer}>
            <Header status={"Logout"}/>

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
                                <h3>Search Data Results</h3>
                            </div>
                            <div className={styles.resultsHolder}>
                                {/* <h1>Kenya trade imports in 209 totalled </h1> */}

                                {/* Download icon */}
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Reporter Code</th>
                                            <th>Trade Flow</th>
                                            <th>Product Code</th>
                                            <th>Product Description</th>
                                            <th>Year</th>
                                            <th>Partner</th>
                                            <th>Trade Value</th>
                                            <th>Quantity</th>
                                            <th>
                                                Quantity Unit
                                                <Link onClick={openModal}> <i className="fa-sharp fa-solid fa-download"></i></Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{mainData.reporterDesc}</td>
                                            <td>{mainData.flowDesc}</td>
                                            <td>{mainData.cmdCode}</td>
                                            <td>{mainData.cmdDesc}</td>
                                            <td>{mainData.period}</td>
                                            <td>{mainData.partnerDesc}</td>
                                            <td>{mainData.primaryValue}</td>
                                            <td>{mainData.netWgt}</td>
                                            <td>{mainData.qtyUnitAbbr}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {isOpen && 
                <ModalOverlay 
                    handleClick={closeModal} 
                    style={styles.close} 
                    open={isOpen}
                    data={mainData}
                />
            }
        </div>
    )
}

export default Searchresults