const express = require("express")
const userRouter = require("../src/routes/user.router")
const authRouter = require("../src/routes/auth.router")
const morgan = require("morgan")


const path = require("path")
require("dotenv").config()
const app = express()

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))

app.use("/", authRouter)
app.use("/users",userRouter)



module.exports = app