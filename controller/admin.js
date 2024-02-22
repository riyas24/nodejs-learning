const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/add-product",
    addProductActive: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const products = new Product(req.body);
  products.save();
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      products,
      docTitle: "Admin Products",
      adminProductActive: true,
    });
  });
};
