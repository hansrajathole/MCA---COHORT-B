const express = require("express")
const router = express.Router()
const protected = require("../middleware/protected")
const productControllers = require("../controllers/product.controller")



router.post("/create", protected, productControllers.productCreateController)
router.post("/update/:id", protected , productControllers.postUpdateController)
router.delete("/delete/:id", protected , productControllers.deletePostController)



module.exports = router