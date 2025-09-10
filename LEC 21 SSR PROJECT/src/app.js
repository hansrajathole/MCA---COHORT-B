const express = require("express")
const userRouter = require("../src/routes/user.router")
const authRouter = require("../src/routes/auth.router")
const morgan = require("morgan")
const session = require('express-session')
const path = require("path")
const config = require("./config/config")
const app = express()
require("dotenv").config()



app.use(morgan("dev"))
app.use(session({
  secret: config.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"../public/css")))

app.use("/", authRouter)
app.use("/users",userRouter)



module.exports = app