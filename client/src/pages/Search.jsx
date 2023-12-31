import { useNavigate } from "react-router-dom"
//import axios from "axios"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import styles from "../styles/Dashboard.module.css"
import useForm from "../Hooks/Formhook"
import userService from "../services/user"

const Search = () => {
    const navigate  = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if(!token){
            navigate("/login")
        }
    }, [navigate])

    const [fetchStatus, setFetchStatus] = useState("No data to fetch ...")

    const initialState = {
        reporterCode: "",
        period: "",
        flowCode: "",
        partnerCode: "",
        cmdCode: "",
    }

    const onSubmit = (formData) => {
        //clean formData
        console.log(formData)

        userService.getData(formData)
        .then(response => {
            console.log(response)

            if(response.error){
                setFetchStatus(response.error)
            }else{
                setFetchStatus(response.message)
                sessionStorage.setItem("data", JSON.stringify(response.data))

                //redirect after 3 seconds
                setTimeout(() => {
                    navigate("/searchquery_results")
                }
                , 3000)
            }
        }).catch(error => {
            if(error.response){
                console.log(error)
                setFetchStatus(error.response.data.message)

                setTimeout(() => {
                    setFetchStatus("No data to fetch ...")
                }
                , 5000)
            }else{
                console.log(error)
                setFetchStatus(error.message)

                setTimeout(() => {
                    setFetchStatus("No data to fetch ...")
                }
                , 5000)
            }
        })
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)


    return (
        <div className={styles.mainContainer}>
            <Header status={"Logout"}/>

            <div className={styles.homeContainer}>
                <div className={styles.homeDiv}>
                    <div>
                        <h1>Find Trade Data. Faster</h1>
                        <p>
                           Search Kenya&apos;s Trade Data with our one stop data solution.
                        </p>
                    </div>
                </div>

                <div className={styles.searchPage}>
                    <form action="" method="" onSubmit={handleSubmit}>
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
                                            <input 
                                                type="text"
                                                name="reporterCode"
                                                required
                                                value={formData.reporterCode}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                        <p>Only one reporter allowed</p>
                                    </div>
                                    <div className="row-item">
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="">Year</label>
                                            <input 
                                                type="text" 
                                                name="period"
                                                value={formData.period}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <p>For multiple, separate with comma</p>
                                    </div>
                                    <div className="row-item">
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="">Trade Flow</label>
                                            <input 
                                                type="text" 
                                                name="flowCode"
                                                value={formData.flowCode}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <p>M for Imports, X for exports</p>
                                    </div>
                                </div>

                                {/* SECOND ROW */}
                                <div className={styles.rowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="">Partner</label>
                                        <input 
                                            type="text" 
                                            name="partnerCode"
                                            value={formData.partnerCode}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <p>Partners; Multiple partners separated by comas</p>
                                </div>

                                {/* THIRD ROW */}
                                <div className={styles.rowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="">HS CODE</label>
                                        <input 
                                            type="text" 
                                            name="cmdCode"
                                            value={formData.cmdCode}  
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <p>Six digit HSCODE; For multiple, separate with comma</p>
                                </div>

                                <div className={styles.rowTwo}>
                                    <button type="submit">Search </button>
                                </div>

                            </div>
                        </div>
                    </form>

                    <div className={styles.searchBox}>
                        <div>
                            <h6>{fetchStatus}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search