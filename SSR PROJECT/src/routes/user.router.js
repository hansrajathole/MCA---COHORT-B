const express = require("express")
const userController = require("../controllers/user.controller")
const router = express.Router()



router.get("/login",userController.loginGetController)
router.post("/login",userController.loginPostController)
router.get("/register",userController.registerGetController)
router.post("/register", userController.registerPostController)
router.get("/logout", userController.logoutController)



module.exports = router