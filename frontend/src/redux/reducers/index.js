import {combineReducers} from 'redux';
import moviesReducer from "./movies";

const allReducers = combineReducers({
    store: moviesReducer
})

export default allReducers;