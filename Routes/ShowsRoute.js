const express = require("express");
const ShowsService = require("../services/ShowsService");

const ShowsRoute = (db) => {
    const router = express.Router();

    // Route to get all TV shows
    router.get('/', async (req, res) => { // Use '/' as this will be prefixed by '/tv-shows' in app.use
        try {
            const shows = await ShowsService.getAllShows(db);
            if (shows.length > 0) {
                res.status(200).json(shows);
            } else {
                res.status(404).json({ message: `No shows found` });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    return router; // Return the router object
};

module.exports = ShowsRoute;
