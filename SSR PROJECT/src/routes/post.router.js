const express = require("express")
const router = express.Router()
const protected = require("../middleware/protected")
const postControllers = require("../controllers/post.controller")



router.get("/create", protected ,postControllers.getCreateController)
router.post("/create", protected, postControllers.postCreateController)
// router.get("/update/:id")
// router.post("/update/:id")
// router.get("")



module.exports = router