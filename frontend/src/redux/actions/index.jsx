import axios from 'axios';
import {FOUND_MOVIES, MOVIE_DETAILS} from '../actions/actionNames'


export const searchMovies = () => {
    return async (dispatch) => {
        var results = await axios.get();
        return dispatch({
            type: FOUND_MOVIES,
            payload: results.data
        })
    }
}