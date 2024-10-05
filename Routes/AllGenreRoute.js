const express = require("express");
const AllGenreService = require("../services/AllGenreService");

const AllGenreRoute = (db) => {
    const router = express.Router();
    router.get("/", async (req, res) => {

        try{
            const allGenres = await AllGenreService.getAllGenreName(db);
        if (allGenres.length > 0){
            res.status(200).json(allGenres[0].genres);
        }
        else{
            res.status(404).json({message : 'No genres found'});
        }
        }
        catch(err){
            res.status(500).json({message : err.message});
        }
    })
    return router;
}

module.exports = AllGenreRoute;
