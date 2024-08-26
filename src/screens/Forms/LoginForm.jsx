import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import {seveFormData} from "../../Redux/form/formActions"
import { motion } from 'framer-motion'
import ModalInfo from "../../components/ModalInfo";

import { useState } from "react";

const LoginForm = () => {
    // Mueve la declaración del hook fuera del return
    const [values, handleChange] = useForm({ username: "", email: "" });
    const [showModalInfo, setShowModalInfo] = useState(true)
    const form = useSelector(state => state.form)
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        dispatch(seveFormData(values))
    }
    const hideModalInfo = () =>{
        setShowModalInfo(false)
    }
    const ShowModaltrue = ()=> {
        setShowModalInfo(true)
    }


    return (
        <motion.div
            initial={{opacity:0, scale: 0.5}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5}}
        >
            <div className="container">
                <ModalInfo 
                    visible={showModalInfo} 
                    message="Bienvenidos al Modulo 7"
                    onClose={hideModalInfo}
                />
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        {/* Corregí el nombre del campo "usernmae" a "username" */}
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username} // Cambié "value" a "values"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email} // Cambié "value" a "values"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button onClick={ShowModaltrue}>
                    mostrar el hide
                </button>
                    </div>
                </form>
                
            </div>                
        </motion.div>
    );
};

export { LoginForm };
