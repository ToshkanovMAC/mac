const express = require("express");
const connectDB = require("./database");
const categoryRoutes = require("./routes/categoryRoute");
const productRoutes = require("./routes/productRoute");
const path = require("path");

const app = express();

connectDB();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log("3000 da ishlayapti"));
