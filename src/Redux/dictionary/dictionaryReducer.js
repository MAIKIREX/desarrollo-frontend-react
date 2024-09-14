import { SET_DICTIONARY_DATA, DELETE_WORD } from "./dictionaryTypes";

const initialState = [];

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DICTIONARY_DATA:
            return [
                ...state,
                action.payload, // Agrega la nueva palabra al diccionario
            ];
        case DELETE_WORD:
            return state.filter(
                (word) =>
                    word.spanish !== action.payload.spanish &&
                    word.english !== action.payload.english &&
                    word.portuguese !== action.payload.portuguese
            ); // Elimina la palabra del diccionario
        default:
            return state;
    }
};

export default dictionaryReducer;
