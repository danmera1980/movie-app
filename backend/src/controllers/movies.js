const axios = require("axios");
const { Favorite } = require('../db');
const apikey = process.env.apikey;

const searchMovies = async (req, res, next) => {
    try {
        const {movies} = req.params

        const movieResults = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${movies}`)
        console.log(movieResults.data);


        res.status(200).send(movieResults.data.Search)
    } catch (error) {
        res.status(404).json(error.message)
        next(error)
    }
}

const getMovieByID = async (req, res, next) => {
    try {
        const {movieID} = req.params

        const movieResults = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&i=${movieID}&plot=full`)
        console.log(movieResults.data);

        const movie = {
            id: movieResults.data.imdbID,
            title: movieResults.data.Title,
            year: movieResults.data.Year,
            rated: movieResults.data.Rated,
            released: movieResults.data.Released,
            runtime: movieResults.data.Runtime,
            genre: movieResults.data.Genre.split(", "),
            director: movieResults.data.Director.split(", "),
            writer: movieResults.data.Writer.split(", "),
            actors: movieResults.data.Actors.split(", "),
            plot: movieResults.data.Plot,
            poster: movieResults.data.Poster,
            imdbRating: movieResults.data.imdbRating
        }
        res.status(200).send(movie)
        
    } catch (error) {
        res.status(404).json(error.message)
        next(error)
    }
}

const movieFavoritesByUserID = async(req, res, next) => {
    try {
        const userId = req.user

        const movies = await Favorite.findAll({
            where: {
                userId,
                favorite:true
            }
        })

        res.status(200).send(movies)

    } catch (error) {
        res.status(404).json(error.message)
        next(error)
    }
}

const toggleFavoriteByMovieID = async(req, res, next) => {
    try {
        const userId = req.user;
        const {movieID} = req.params;

        const movie = await Favorite.findOne({
            where: {
                userId,
                imdbID: movieID
            }
        })

        if(!movie){
            Favorite.create({
                userId,
                imdbID: movieID,
                favorite: true
            })
            res.status(200).json("Movie added to Favorites")
        } else {
            movie.favorite = !movie.favorite;
            movie.save();
            res.status(200).json("Movie updated in Favorites")
        }

    } catch (error) {
        res.status(404).json(error.message)
        next(error)
    }
}

module.exports = {
    getMovieByID,
    searchMovies,
    movieFavoritesByUserID,
    toggleFavoriteByMovieID
}