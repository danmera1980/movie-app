const { Router } = require("express");
const { movieFavoritesByUserID, toggleFavoriteByMovieID } = require('../controllers/movies');
const authorization = require("../middleware/authorization");
const router = Router();

router.get("/", authorization, movieFavoritesByUserID);
router.post("/:movieID", authorization, toggleFavoriteByMovieID)

module.exports = router;