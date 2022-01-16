const Product = require('../models/product');

module.exports = {
  fetchAllProducts: async (name, company, featured, filter) => {
    let products = await Product.fetchAll();
    if (name) {
      products = products.filter(
        (p) => p.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
    }
    if (company) {
      products = products.filter(
        (p) => p.company.toLowerCase().indexOf(company.toLowerCase()) !== -1
      );
    }
    if (featured) {
      const isFeatured = featured === 'true';
      if (isFeatured) {
        products = products.filter((p) => p.featured);
      }
    }
    if (filter) {
      const queries = filter.split(',');
      queries.forEach((q) => {
        if (q.indexOf('<') !== -1) {
          const [field, number] = q.split('<');
          products = products.filter((p) => {
            if (Object.prototype.hasOwnProperty.call(p, field))
              return p[field] < Number(number);
            return true;
          });
        } else if (q.indexOf('>') !== -1) {
          const [field, number] = q.split('>');
          products = products.filter((p) => {
            if (Object.prototype.hasOwnProperty.call(p, field))
              return p[field] > Number(number);
            return true;
          });
        }
      });
    }
    return products;
  },
};
