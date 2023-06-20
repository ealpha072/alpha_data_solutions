import styles from "../styles/Logout.module.css"
import {BeatLoader} from 'react-spinners'

const Logout = () => {
  return (
    <div className={styles.logout}>
        <h1>Successfully loged out, taking you to login page </h1>
        <BeatLoader color='#293745'/>
    </div>
  )
}

export default Logout