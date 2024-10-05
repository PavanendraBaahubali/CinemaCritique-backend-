// server.js
const express = require('express');
const connectDB = require('./db'); // Import the new db module
const homeRoute = require('./Routes/homeRoutes');
const GenreRoute = require('./Routes/GenreRoute');
const ShowsRoute = require('./Routes/ShowsRoute');
const MovieRoute = require('./Routes/MovieRoute');

const app = express();
const port = 3030;

app.use(express.json());

const startServer = async () => {
    const db = await connectDB(); 

    app.use('/', homeRoute(db)); 
    app.use('/genre', GenreRoute(db));
    app.use('/tv-shows', ShowsRoute(db));
    app.use('/movies', MovieRoute(db));

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}/`);
    });
};

startServer().catch(err => console.error(err));
