const postModel = require("../models/posts.model");

module.exports.getCreateController = (req, res)=>{
    try {
        
        res.render("create.ejs", {title : "create page"})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
        
    }
}


module.exports.postCreateController = async (req,res)=>{
    try {
        
        const {title , content , image , tags} = req.body

        if(!title || !content || !image){
            return res.render("create.ejs")
        }

        const userId = req.userId

        const post = await postModel.create({
            author : userId,
            title : title,
            image : image, 
            content : content,
            tags : tags
        })

        res.redirect("/")
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
                
    }
}