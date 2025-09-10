module.exports.indexController = function (req, res) {
    try {

        if(req.session.user){
            const user = req.session.user
            console.log(user);
            
            res.render("index.ejs", {title : "Home page" , user : user })
        }else {
            res.redirect("/users/login")
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}