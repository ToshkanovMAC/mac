const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const { uploadProductImages } = require("../upload");

router.post("/", uploadProductImages, controller.create);
router.get("/", controller.getAll);

module.exports = router;
