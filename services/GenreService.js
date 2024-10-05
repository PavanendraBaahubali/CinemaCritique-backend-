const getMovieByGenre = async (db, genreName) => {
    try {
        // Convert the input genre to lowercase for case-insensitive matching
        const lowerCaseGenreName = genreName.toLowerCase();

        // Use regex to find documents where Genre contains the specified genre, converted to lowercase
        const movies = await db.collection("hollywood").find({
            Genre: { $regex: new RegExp(`(^|,)\\s*${lowerCaseGenreName}\\s*(,|$)`, 'i') } // 'i' for case-insensitive matching
        }).toArray(); // Convert cursor to an array

        return movies; // Return the result
    } catch (err) {
        throw new Error(err.message); // Handle errors
    }
};

module.exports = { getMovieByGenre };
