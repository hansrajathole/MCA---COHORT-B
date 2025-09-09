const express = require("express")
const userController = require("../controllers/user.controller")
const router = express.Router()

router.get("/register",userController.registerGetController)



router.post("/register", userController.registerPostController)



module.exports = router