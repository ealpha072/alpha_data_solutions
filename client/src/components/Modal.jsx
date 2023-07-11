/* eslint-disable react/prop-types */
import CsvDownloadButton from 'react-json-to-csv'
import styles from "../styles/Modal.module.css"

const ModalOverlay = ({open, handleClick, style, data}) => {

    return (
        <div className={styles.modalHolder}>
            <div className={`${styles.modalOverlay} ${open ? 'open': ''}`}>
                <div className={styles.modalContent}>
                    <h1>Please choose a download format</h1>
                    <div className={styles.headerContent}>
                        <label htmlFor="">Download Format:</label>
                        <select name="" id="">
                            <option value="" defaultValue={"CSV"}>CSV</option>
                            <option value="">JSON</option>
                        </select>
                    </div>
                    <div>
                        {/* <button>DOWNLOAD</button> */}
                        <CsvDownloadButton data={data} />
                        <button onClick={handleClick} className={style}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOverlay;
