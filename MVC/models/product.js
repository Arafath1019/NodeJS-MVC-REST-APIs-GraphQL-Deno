const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(productTitle, productPrice, productDescription, productImageURL) {
    this.title = productTitle;
    this.price = productPrice;
    this.description = productDescription;
    this.imageURL = productImageURL;
  }

  save() {
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
