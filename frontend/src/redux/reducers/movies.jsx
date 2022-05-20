import {FOUND_MOVIES, MOVIE_DETAILS, MOVIE_FAVORITES, TOGGLE_FAVORITE, GET_COMMENTS} from '../actions/actionNames'

const initialState = {
    movies: [],
    details: {},
    comments: []
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOUND_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        
        case MOVIE_DETAILS:
            return {
                ...state,
                details: action.payload
            }

        case MOVIE_FAVORITES:
            return {
                ...state,
                movies:[]
            }

        case TOGGLE_FAVORITE:
            return {
                ...state,
                
            }

        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }

        default:
            return state;
    }
}

export default moviesReducer;