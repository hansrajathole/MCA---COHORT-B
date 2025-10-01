const { json } = require("express");
const productModel = require("../models/product.model");



module.exports.productCreateController = async (req,res)=>{
    try {
        
        const {title , description , image , price , category} = req.body

        if(!title || !description || !image || !price || !category){
            return res.status(400).json({message : "all fields are required"})
        }

        const userId = req.userId

        const product = await productModel.create({
            author : userId,
            title ,
            image , 
            description,
            price,
            category
        })

        res.status(201).json({message : "product created successfully" , product})

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
                
    }
}




module.exports.postUpdateController = async (req ,res) => {
    try {
        const postId = req.params.id
        const {title , content , image , tags} = req.body

        const post = await productModel.findById(postId)

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
        const productId = req.params.productId

        await productModel.findByIdAndDelete(productId)

        res.status(200).json({message : "post deleted successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
       
    }
}


module.exports.productDetailController = async (req , res) => {
    try {
        const productId = req.params.productId

        if(!productId){
            return res.status(400).json({message : "productId is required"})
        }

        const product = await productModel.findById(productId)

        if(!product){
            return res.status(400).json({message : "product not found"})
        }

        res.status(200).json({message :"product detail found", product })


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
       
    }
}