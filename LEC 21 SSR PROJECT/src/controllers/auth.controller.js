module.exports.indexController = function (req, res) {
    try {
        res.render("index.ejs")
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}