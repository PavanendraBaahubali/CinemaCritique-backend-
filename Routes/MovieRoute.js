const express = require("express");
const MoviesService = require("../services/MoviesService");

const MovieRoute =  (db) => {
    const router = express.Router();
    try{
        router.get('/', async (req, res) => {
            const movies = await MoviesService.getAllMovies(db);
            if (movies.length > 0) {
                res.status(200).json(movies);
            }
            else{
                res.status(404).json({message : 'No movies found'});
            }
        })
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
    return router
}

module.exports = MovieRoute;