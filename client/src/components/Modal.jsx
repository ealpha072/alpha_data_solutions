import styles from "../styles/Modal.module.css"

const ModalOverlay = () => {
    
    return (
        <div className={styles.modalHolder}>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h1>Please choose a download format</h1>
                    <div className={styles.headerContent}>
                        <label htmlFor="">Download Format</label>
                        <select name="" id="">
                            <option value="" selected defaultValue={"CSV"}>CSV</option>
                            <option value="">JSON</option>
                        </select>
                    </div>
                    <div>
                        <button>DOWNLOAD</button>
                        <button>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOverlay;
