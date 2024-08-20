import { SET_NAME_MODULE } from "./defaultTypes";

export const setNameModule = (setNameModule) => {
    return {
        type: SET_NAME_MODULE,
        payload: setNameModule,
    }
}