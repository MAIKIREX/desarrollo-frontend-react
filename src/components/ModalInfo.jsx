import {motion} from "framer-motion"

const ModalInfo = ({ visible, message, onClose}) => {
    if(!visible){
        return null;
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="notificatt-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y:0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button className="close-btn-success" onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    )
}

const ModalExitLogin = ({ visible, message, buttonmessage , onClose, closeLogin}) => {
    if(!visible){
        return null;
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="notificatt-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y:0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button onClick={closeLogin}>{buttonmessage}</button>
                <button className="close-btn-success" onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    )
}



export { ModalInfo, ModalExitLogin };