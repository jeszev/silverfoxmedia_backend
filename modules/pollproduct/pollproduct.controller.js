const pollproductService = require("./pollproduct.service");

const getPollProduct = async (req, res) => {
  try {
    const response = await pollproductService.getPollProduct();
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

const createPollProduct = async (req, res) => {
  try {
    const response = await pollproductService.createPollProduct(req.body);
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

const deletePollProduct = async (req, res) => {
  try {
    const response = await pollproductService.deletePollProduct(req.body);
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

const getPollProductById = async (req, res) => {
  try {
    const response = await pollproductService.getPollProductById(
      req.params.userId
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

module.exports = {
  getPollProduct,
  createPollProduct,
  deletePollProduct,
  getPollProductById,
};
