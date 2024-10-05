const getAllMovies = async (db)  => {
    try{
        const movies = await db.collection("hollywood").find({Type : "movie"}).toArray();
        return movies;
    }
    catch(err){
        throw new Error(err.message);
    }
}
module.exports = {getAllMovies};