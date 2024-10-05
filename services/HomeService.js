const getAllHomeMovies = async (db, req, res) => {
    try {
        const allMovies = await db.collection("hollywood").find({}, {
            projection: {
                Title: 1,
                Director: 1,
                Writer: 1,
                Poster: 1,
                Actors: 1,
                Plot: 1,
                Awards: 1,
                Type: 1,
                imdbRating: 1,
                imdbVotes: 1,
                Genre: 1,
                _id: 1 // Exclude _id if you don't want it in the result
            }
        }).toArray(); // Convert cursor to an array

        res.status(200).json(allMovies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllHomeMovies };
