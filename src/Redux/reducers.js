import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducer';
import productsReducer from "./Product/productReducer"
import formReducer from './form/formReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productsReducer,
    form: formReducer,
})

export default rootReducer;