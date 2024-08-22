import { useState } from "react";
 
const useForm = (InitialValues) => {
    const [values, setValues] = useState(InitialValues);

    const handleChange = (event) => {
        const {name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    return [values, handleChange]
}

export default useForm;