const { Router } = require("express");
const { searchMovies, getMovieByID } = require('../controllers/movies');
const authorization = require("../middleware/authorization");
const router = Router();

router.get("/:movies", authorization, searchMovies);
router.get("/movie/:movieID", getMovieByID);

module.exports = router;