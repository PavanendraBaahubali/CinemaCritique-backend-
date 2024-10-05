const { ObjectId } = require('mongodb');
const getMovieById = async (db, movieId) => {
    try{
        const movie = await db.collection('hollywood').findOne({_id : new ObjectId(movieId)});
        return movie
    }
    catch(err){
        throw new Error(err.message);
    }
}

module.exports = {getMovieById}