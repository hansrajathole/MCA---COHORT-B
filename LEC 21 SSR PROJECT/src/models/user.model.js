const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String ,
        required : true,
        unique : true,
    },
    profile : {
        type : String,
        default : "https://i.sstatic.net/l60Hf.png"
    },
    password : {
        type : String ,
        required : true
    }
})


const userModel = mongoose.model("User", userSchema)
module.exports = userModel