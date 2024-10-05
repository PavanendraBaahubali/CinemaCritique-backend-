const getAllShows = async(db) => {
    try{
        const series = await db.collection("hollywood").find({Type : "series"}).toArray();
        console.log("i am at show service")
        return series;
    }   
    catch(err){
        throw new Error({message : err.message});
    }
}   

module.exports = {getAllShows};