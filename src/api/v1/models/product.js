const db = require('../../../../db/products.json');

module.exports = class Product {
  constructor({ name, price, company, featured, rating }) {
    this.name = name;
    this.price = price;
    this.company = company;
    this.featured = featured;
    this.rating = rating;
  }

  static async fetchAll() {
    return db;
  }
};
