import {FOUND_MOVIES, MOVIE_DETAILS, MOVIE_FAVORITES} from '../actions/actionNames'

const initialState = {
    movies: [],
    details: {}
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
            return
    
        default:
            return state;
    }
}

export default moviesReducer;