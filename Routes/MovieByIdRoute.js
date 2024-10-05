const express = require("express");
const MovieByIdService = require("../services/MovieByIdService");

const MovieByIdRoute = (db)  => {
    const router = express.Router();

        router.get("/:movieId", async (req, res) =>{
            const movieId = req.params.movieId
            console.log(movieId);

            try{
                const movie = await MovieByIdService.getMovieById(db, movieId)
                if(movie){
                    res.status(200).json(movie);
                }
                else{
                    res.status(404).json({message : "Movie not found"});
                }
            }
            catch(err) {
                res.status(500).json({message : err.message})
            }
        })
        return router
}

module.exports = MovieByIdRoute;