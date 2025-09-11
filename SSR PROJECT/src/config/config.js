require("dotenv").config()

const _config =  {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_DB_URI,
    JWT_SECRET : process.env.JWT_SECRET
}


const config = Object.freeze(_config)
module.exports = config