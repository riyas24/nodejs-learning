const express = require("express");
const router = express.Router();
const shopController = require("../controller/shop");

router.get("/", shopController.getIndex);
router.get("/cart", shopController.getCart);
router.get("/products", shopController.getProducts);
router.get("/checkout", shopController.getCheckout);


module.exports = router;
