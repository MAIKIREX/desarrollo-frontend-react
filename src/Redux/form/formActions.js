import { SET_FORM_DATA } from "./formTypes";

export const seveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,

    }
}