const getAllGenreName = async (db) => {
    try{
        const genres = await db.collection("genre").find({}).toArray();
        return genres
    }
    catch (err){
        throw new Error({message : err.message});
    }
}

module.exports = {getAllGenreName};