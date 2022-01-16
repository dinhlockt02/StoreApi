const productService = require('./product.service');

module.exports = {
  getProducts: async (req, res, next) => {
    try {
      const { name, company, featured, filter } = req.query;
      const products = await productService.fetchAllProducts(
        name,
        company,
        featured,
        filter
      );

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
};
