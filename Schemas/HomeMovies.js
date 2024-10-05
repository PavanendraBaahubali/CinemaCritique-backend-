const mongoose = require("mongoose");

const homeMoviesSchema = new mongoose.Schema({
    Title : {
        type : String,
        required: true,
    },
    Poster : {
        type : String,
    },
    Director : {
        type : String,
    },
    Writer : {
        type : String,
    },
    Actors : {
        type : String,
    },
    Plot : {
        type : String,
    },
    Awards : {
        type : String,
    }
    ,
    Type : {
        type : String,
    },
    imdbRating : {
        type : String,
    }
    ,
    imdbVotes : {
        type : String,
    },
    Genre : {
        type : String,
    }
})

const HomeMovies = mongoose.model('HomeMovies', homeMoviesSchema)

module.exports = HomeMovies;