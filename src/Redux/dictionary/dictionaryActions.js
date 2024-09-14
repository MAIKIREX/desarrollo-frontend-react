import { SET_DICTIONARY_DATA, DELETE_WORD } from "./dictionaryTypes";

// Acción para agregar una palabra
export const setAddWord = (formData) => {
    return {
        type: SET_DICTIONARY_DATA,
        payload: formData,
    };
};

// Acción para eliminar una palabra
export const deleteWord = (wordToDelete) => {
    return {
        type: DELETE_WORD,
        payload: wordToDelete,
    };
};