const fs = require("fs");
const path = require("path");

module.exports = class Products {
  
  constructor(obj) {
    this.obj = obj;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
   let products = [];
      try {
        products = JSON.parse(fileContent);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
      products.push(this.obj);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error("Error writing file:", err);
        }
      });
    });
  }

  static fetchAll(callback) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error("Error reading file:", err);
        callback([]);
        return;
      }
      let products = [];
      try {
        products = JSON.parse(fileContent);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
      callback(products);
    });
  }

};
