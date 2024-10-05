const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const homeRoute = require('./Routes/homeRoutes');
const GenreRoute = require('./Routes/GenreRoute');
const ShowsRoute = require('./Routes/ShowsRoute');
const MovieRoute = require('./Routes/MovieRoute');
const AllGenreRoute = require('./Routes/AllGenreRoute');
const updateRoute = require('./Routes/UpdateRoute');
const MovieByIdRoute = require('./Routes/MovieByIdRoute');

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const startServer = async () => {
    const db = await connectDB(); // Get DB connection
    
    // Routes
    app.use('/', homeRoute(db)); 
    app.use('/genre', GenreRoute(db));
    app.use('/tv-shows', ShowsRoute(db));
    app.use('/movies', MovieRoute(db));
    app.use('/genres', AllGenreRoute(db));
    app.use('/movie', updateRoute(db));  
    app.use('/movie', MovieByIdRoute(db));  


    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}/`);
    });
};

startServer().catch(err => console.error(err));
