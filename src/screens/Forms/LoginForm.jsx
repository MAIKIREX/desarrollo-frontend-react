import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import {seveFormData} from "../../Redux/form/formActions"

const LoginForm = () => {
    // Mueve la declaración del hook fuera del return
    const [values, handleChange] = useForm({ username: "", email: "" });
    const form = useSelector(state => state.form)
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        dispatch(seveFormData(values))
    }

    return (
        <div>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export { LoginForm };
