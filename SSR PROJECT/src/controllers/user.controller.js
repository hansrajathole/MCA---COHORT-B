const userModel = require("../models/user.model")
const bcrypt =  require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config")



module.exports.loginGetController = function(req ,res){
    try {
        
        res.render("login.ejs", {title : "Login page"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
        
    }
}

module.exports.loginPostController = async function (req ,res) {

    try {
        const {email , password} = req.body

        if (!email) {
            return res.redirect("/users/login")
        }
        if (!password) {
            return res.redirect("/users/login")
        }

        const user = await userModel.findOne({email : email})

        if(!user){
            return res.redirect("/users/register")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.redirect("/users/login")
        }

        const token = await jwt.sign({
            id : user._id ,
            username : user.username ,
            email : user.email
        },config.JWT_SECRET)
        delete user._doc.password

        req.session.token = token
        req.session.user = user
        res.redirect("/")

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
    
}


module.exports.registerGetController = function(req, res) {
    try {
        
        res.render("register.ejs", {title : "register page"})
        
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

        res.redirect("/users/login")

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
        
    }
}


module.exports.logoutController = function (req, res) {
    try {
        req.session.destroy((err)=>{
            if(err){
                return res.redirect("/")
            }
            res.redirect("/users/login")
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}


module.exports.profileController = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await userModel.findById(userId)

        res.render("profile" , {title : "profile page" , user})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}