const products = [];

module.exports = class Products {
  constructor(product, qty) {
    this.product = product;
    this.qty = qty;
  }
  save() {
    products.push({ product: this.product, qty: this.qty });
  }
  static fetchAll() {
    return products;
  }
};
