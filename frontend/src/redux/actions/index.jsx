import axios from 'axios';
import {FOUND_MOVIES, MOVIE_DETAILS, MOVIE_FAVORITES, TOGGLE_FAVORITE, GET_COMMENTS} from '../actions/actionNames'
const url = process.env.REACT_APP_BACKEND_URL

export const searchMovies = (payload, token) => {
    try {
        const headers ={
            headers: {'token': token}
        }
        if(payload.length){
            return async (dispatch) => {
                var results = await axios.get(`${url}/movies/${payload}`, headers);
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


export const getFavorites = (token)=>{
    try {
        return async (dispatch) => {
            const headers = {
                headers: { 'token': token}
            }
            var results = await axios.get(`${url}/favorites`, headers)
            return dispatch({
                type: MOVIE_FAVORITES,
                payload: results.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const toggleFavorite = (movieID, token, index)=>{
    try {
        return async (dispatch)=>{
            var results = await axios({
                method: 'post',
                url: `${url}/favorites/${movieID}`,
                headers: {
                    'token': token
                }
            })
            console.log(results);
            return dispatch({
                type: TOGGLE_FAVORITE,
                payload: index
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const getCommentsByMovieID = (movieID) => {
    try {
        return async (dispatch) => {
            var results = await axios.get(`${url}/comments/${movieID}`);
            return dispatch({
                type: GET_COMMENTS,
                payload: results.data
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const newCommentByUser = (payload) => {
    try {
        const {movieID, token, body} = payload
        return async(dispatch) => {
            var results = await axios({
                method: 'post',
                url: `${url}/comments/${movieID}`,
                headers: {
                    'token': token
                },
                data: body
            })

            return results

        }
    } catch (error) {
        console.log(error);
    }
}