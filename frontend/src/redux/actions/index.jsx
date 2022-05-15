import axios from 'axios';
import {FOUND_MOVIES, MOVIE_DETAILS} from '../actions/actionNames'
const url = process.env.REACT_APP_BACKEND_URL

export const searchMovies = (payload) => {
    try {
        if(payload.length){
            return async (dispatch) => {
                var results = await axios.get(`${url}/movies/${payload}`);
                return dispatch({
                    type: FOUND_MOVIES,
                    payload: results.data===""?[]:results.data
                })
            }
        } else {
            return async (dispatch) => {
                return dispatch({
                    type: FOUND_MOVIES,
                    payload: []
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getMovieDetailsByID = (payload) => {
    try {
        return async (dispatch) => {
            var results = await axios.get(`${url}/movies/movie/${payload}`);
            return dispatch({
                type: MOVIE_DETAILS,
                payload: results.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}


export const getFavorites = (payload)=>{
    try {
        return async (dispatch) => {
            const headers = {
                headers: { 'token': payload}
            }
            var results = await axios.get(`${url}/favorites`, headers)
        }
    } catch (error) {
        console.log(error);
    }
}