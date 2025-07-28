const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let papka = "uploads/";
    if (file.fieldname === "image") papka += "categories/";
    else if (file.fieldname === "images") papka += "products/";
    cb(null, papka);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.uploadCategoryImage = multer({ storage }).single("image");
exports.uploadProductImages = multer({ storage }).array("images", 5);
