const postModel = require("../models/posts.model");



module.exports.postCreateController = async (req,res)=>{
    try {
        
        const {title , content , image , tags} = req.body

        if(!title || !content || !image){
            return res.status(400).json({message : "all field are required"})
        }

        const userId = req.userId

        const post = await postModel.create({
            author : userId,
            title : title,
            image : image, 
            content : content,
            tags : tags
        })

        res.status(201).json({message : "post create successfully" , post})

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
                
    }
}




module.exports.postUpdateController = async (req ,res) => {
    try {
        const postId = req.params.id
        const {title , content , image , tags} = req.body

        const post = await postModel.findById(postId)

        post.title = title || post.title
        post.content = content || post.content
        post.image = image || post.image
        post.tags = tags || post.tags

        await post.save()

        res.status(200).json({message : "post update succcefully" , post})


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
        
    }
}


module.exports.deletePostController = async (req ,res) => {
    try {
        const postId = req.params.id

        await postModel.findByIdAndDelete(postId)

        res.status(200).json({message : "post delete successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
       
    }
}