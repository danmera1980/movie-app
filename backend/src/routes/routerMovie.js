const { Router } = require("express");
const { searchMovies, getMovieByID } = require('../controllers/movies');
const router = Router();

router.get("/:movies", searchMovies);
router.get("/movie/:movieID", getMovieByID);

module.exports = router;