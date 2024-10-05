const express = require("express")
const GenreService = require("../services/GenreService")

const GenreRoute = (db) => {
    const router = express.Router();


    router.get('/:name', async (req, res) => {
        const genre = req.params.name;
        console.log(genre);
        try{
            const movies = await GenreService.getMovieByGenre(db, genre);
        if (movies.length > 0){
            res.status(200).json(movies);
        }
        else{
            res.status(404).json({message : `movies not found with genre : ${genre}`})
        }
        }
        catch(err){
            res.status(500).json({message : err.message});
        }
    });
    return router
}

module.exports = GenreRoute;