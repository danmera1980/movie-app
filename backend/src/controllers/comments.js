const { Comment } = require("../db");

const getAllCommentsByMovieID = async (req, res,  next) => {

    try {
        const {movieID} = req.params;
    
        const allComments = await Comment.findAll({
            where: {
                imdbID: movieID
            }
        })
        // console.log(allComments);
        if(!allComments){
            throw new Error("No comments available")
        } else {
            res.status(200).send(allComments)
        }
        
    } catch (error) {
        res.status(404).send(error.message)
        next(error)
    }
}

const addNewComment = async (req, res, next) => {
    
    try {
        const userId = req.user
        const {movieID} = req.params
        const { rating, comment, imdbID } = req.body

        const commentByUser = await Comment.create({
            rating,
            comment,
            imdbID: movieID,
            userId
        })

        if(!commentByUser){
            res.status(404).send("Error creating the comment")
        }

        res.status(200).json("New comment added!")
        
    } catch (error) {
        res.status(404).json("Error when trying to add the comment: "+error.message)
        next(error)
    }

}

module.exports = {
    getAllCommentsByMovieID,
    addNewComment
}