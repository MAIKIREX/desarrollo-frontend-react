import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { seveFormData } from "../../Redux/form/formActions";
import { motion } from "framer-motion";
import {ModalInfo, ModalExitLogin} from "../../components/ModalInfo";
import { useState } from "react";

const LoginForm = () => {
    // Mueve la declaración del hook fuera del return
    const [values, handleChange] = useForm({ username: "", email: "", password: ""});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.password === form.password){
            console.log(values)
            dispatch(seveFormData(values));
        } else {
            hideModalInfoTrue();
        }
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const hideModalInfoTrue = () => {
        setShowModalInfo(true);
    };

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /*Modal para el Logaut*/
    const [showModalExitLogin, setshowModalExitLogin] = useState(false);
    const handleLogout = (event) => {
        event.preventDefault();
        setshowModalExitLogin(true)
    }

    const hideModalExitLogin = () =>{
        setshowModalExitLogin(false)
    }

    const cleanModalExitLogin = () => {
        dispatch(seveFormData({email: "", username: ""}));
        setshowModalExitLogin(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Password incorrecto"
                onClose={hideModalInfo}
            />

            <ModalExitLogin
                visible={showModalExitLogin}
                message ="¿Estas seguro de que quieres cerrar la sesion?"
                buttonmessage = "Presionar para salir!!!"
                onClose = {hideModalExitLogin}
                closeLogin = {cleanModalExitLogin}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.password}</h5>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"} 
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button className={showPassword ? "button-hide" : "button-show"} type="button" onClick={passwordVisibility}>
                            {showPassword ? "Hide" : "Show"} 
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <a onClick={handleLogout} className="linkLogout" href="">Logout</a>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export { LoginForm };
