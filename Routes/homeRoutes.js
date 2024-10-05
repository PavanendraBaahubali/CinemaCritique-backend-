// Routes/homeRoutes.js
const express = require('express');
const HomeService = require('../services/HomeService');

const homeRoute = (db) => {
    const router = express.Router();

    router.get('/', (req, res) => HomeService.getAllHomeMovies(db, req, res)); // Pass db to the service method

    return router;
};

module.exports = homeRoute;
