const express = require("express")
const router = express.Router()
const protected = require("../middleware/protected")
const postControllers = require("../controllers/post.controller")



router.post("/create", protected, postControllers.postCreateController)
router.post("/update/:id", protected , postControllers.postUpdateController)
router.delete("/delete/:id", protected , postControllers.deletePostController)



module.exports = router