const express = require("express");
const UpdatePosterService = require("../services/UpdatePosterService");

const updateRoute = (db) => {
    const router = express.Router(); // Initialize router correctly
    
    router.put('/:name', async (req, res) => {
        const name = req.params.name; // Movie title from URL
        const { posterUrl } = req.body; // New poster URL from request body
        
        console.log("Movie Name:", name);
        console.log("New Poster URL:", posterUrl);
        
        try {
            const updatedMovie = await UpdatePosterService.updateMoviePoster(db, name.toLowerCase(), posterUrl);
            console.log("Updated Movie:", updatedMovie);
            
            if (updatedMovie) {
                res.status(200).json({ message: "Movie poster updated successfully", updatedMovie });
            } else {
                res.status(404).json({ message: "Movie not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Internal server error", error: err.message });
        }
    });
    
    return router; // Return router to be used in server.js
};

module.exports = updateRoute;
