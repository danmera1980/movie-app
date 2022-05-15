const { Router } = require("express");
const { getAllCommentsByMovieID, addNewComment } = require('../controllers/comments');
const authorization = require("../middleware/authorization");
const router = Router();

router.get("/:movieID", getAllCommentsByMovieID);
router.post("/:movieID", authorization, addNewComment);

module.exports = router;