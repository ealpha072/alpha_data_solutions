import { useNavigate } from "react-router-dom"
//import axios from "axios"
import { useState } from "react"
import Header from "../components/Header"
import logo from "../assets/logo.png"
import styles from "../styles/Dashboard.module.css"
import useForm from "../Hooks/Formhook"
import userService from "../services/user"

const Search = () => {
    const navigate  = useNavigate()
    const [fetchStatus, setFetchStatus] = useState("")

    const initialState = {
        reporterCode: "",
        period: "",
        flowCode: "",
        partnerCode: "",
        cmdCode: "",
    }

    const onSubmit = (formData) => {
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
            console.log(error)
            setFetchStatus(error.message)
        })
    }

    const {formData, handleInputChange, handleSubmit} = useForm(initialState, onSubmit)


    return (
        <div className={styles.mainContainer}>
            <Header logo={logo} styles={styles}/>

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
                                                value={formData.reporterCode}
                                                onChange={handleInputChange}

                                            />
                                        </div>
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
                                </div>

                                <div className={styles.rowTwo}>
                                    <button type="submit">Search </button>
                                </div>

                            </div>
                        </div>
                    </form>

                    <div className={styles.searchBox}>
                        <div>
                            <h3>Request Status</h3>
                        </div>
                        <div>
                            <h1>{fetchStatus}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search