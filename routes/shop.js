const express = require("express");
const path = require("path");
const router = express.Router();
const adminData = require("./admin");
const rootDir = require("../utils/path");

router.get("/", (req, res, next) => {
  console.log("products", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { products: adminData.products, docTitle: "shop" });
});

module.exports = router;
