import { combineReducers } from 'redux';
import defaultReducer from './default/defaultReducer';
import productsReducer from './Product/productReducer';
import formReducer from './form/formReducer';
import dictionaryReducer from './dictionary/dictionaryReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productsReducer,
    form: formReducer,
    word: dictionaryReducer
});

export default rootReducer;
