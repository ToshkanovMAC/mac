const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");
const { uploadCategoryImage } = require("../upload");

router.post("/", uploadCategoryImage, controller.create);
router.get("/", controller.getAll);
router.delete("/:id", controller.delete);

module.exports = router;
