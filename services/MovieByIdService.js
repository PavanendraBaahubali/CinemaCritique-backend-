const getMovieById = async (db, movieId) => {
    try{
        console.log("Inside movie by id servicee")
        const movie = await db.collection('hollywood').findOne({_id : movieId});
        console.log(movie);
        return movie
    }
    catch(err){
        throw new Error(err.message);
    }
}

module.exports = {getMovieById}