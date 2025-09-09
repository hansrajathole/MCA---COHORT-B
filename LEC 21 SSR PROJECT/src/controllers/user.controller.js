const userModel = require("../models/user.model")
const bcrypt =  require("bcrypt")

module.exports.registerGetController = function(req, res) {
    try {
        
        res.render("register.ejs")
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
        
    }
}




module.exports.registerPostController = async function(req, res) {
    try {
        
        const {username , email , password} = req.body

        const hashedPass = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username : username,
            email : email,
            password : hashedPass
        })

        res.redirect("/")

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
        
    }
}
