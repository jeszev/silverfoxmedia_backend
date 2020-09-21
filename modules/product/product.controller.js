const productService = require("./product.service");

const getProducts = async (req, res) => {
  try {
    const response = await productService.getProducts();
    if (!response.error) {
      return res.json(response);
    } else {
      res.status(400);
      return res.json(response);
    }
  } catch (error) {
    res.status(400);
    return res.json(null);
  }
};

const createProduct = async (req, res) => {
  try {
    const response = await productService.createProduct(req.body);
    if (!response.error) {
      return res.json(response);
    } else {
      res.status(400);
      return res.json(response);
    }
  } catch (error) {
    res.status(400);
    return res.json(null);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const response = await productService.deleteProduct(req.body);
    if (!response.error) {
      return res.json(response);
    } else {
      res.status(400);
      return res.json(response);
    }
  } catch (error) {
    res.status(400);
    return res.json(null);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const response = await productService.getProductsByCategory(
      req.params.name
    );
    if (!response.error) {
      return res.json(response);
    } else {
      res.status(400);
      return res.json(response);
    }
  } catch (error) {
    res.status(400);
    return res.json(null);
  }
};

const getProductsBySpec = async (req, res) => {
  try {
    const response = await productService.getProductsBySpec(req.params.name);
    if (!response.error) {
      return res.json(response);
    } else {
      res.status(400);
      return res.json(response);
    }
  } catch (error) {
    res.status(400);
    return res.json(null);
  }
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsBySpec,
};
