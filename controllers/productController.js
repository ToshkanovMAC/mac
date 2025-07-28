const Product = require("../models/Product");

exports.create = async (req, res, next) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      images: req.files.map((file) => file.filename),
    });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, minPrice, maxPrice } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (minPrice) filter.price = { $gte: minPrice };
    if (maxPrice) filter.price = { ...filter.price, $lte: maxPrice };

    const products = await Product.find(filter)
      .limit(limit)
      .skip((page - 1) * limit)
      .populate("category");

    res.json(products);
  } catch (err) {
    next(err);
  }
};
