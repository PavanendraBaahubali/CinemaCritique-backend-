const updateMoviePoster = async (db, movieName, newPosterUrl) => {
    try {
        console.log("In UpdatePosterService, updating all movies with name:", movieName);

        // Update all movies with the same name (case-insensitive)
        const result = await db.collection('hollywood').updateMany(
            { $expr: { $eq: [ { $toLower: "$Title" }, movieName.toLowerCase() ] } }, // Case-insensitive match
            { $set: { Poster: newPosterUrl } }  // Update the Poster field
        );

        console.log("Movies matched:", result.matchedCount);  // Number of documents matched
        console.log("Movies modified:", result.modifiedCount);  // Number of documents modified

        if (result.modifiedCount > 0) {
            return { message: `${result.modifiedCount} movie(s) updated` };
        } else {
            return { message: "No movies were updated, possibly due to no match." };
        }
    } catch (err) {
        console.error('Error occurred:', err.message);
        throw new Error('Could not update the poster: ' + err.message);
    }
};

module.exports = { updateMoviePoster };
