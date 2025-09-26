const postModel = require("../models/posts.model");

module.exports.indexController = async function (req, res) {
    try {

        const posts = await postModel.find().populate("author")

        if(posts.length === 0){
            res.status(200).json({message : "posts data not found"})
        }

        res.status(200).json({message : "posts data found" , posts})
    
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}