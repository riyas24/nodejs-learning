const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/add-product",
    addProductActive: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const products = new Product(req.body.product,req.body.qty);
  products.save();
  res.redirect("/");
};
exports.getProduct = (req, res, next) => {
  res.render("shop", {
    products: Product.fetchAll(),
    docTitle: "Shop",
    path: "/",
    hasProducts: Product.fetchAll().length > 0,
    shopActive: true,
  });
};
