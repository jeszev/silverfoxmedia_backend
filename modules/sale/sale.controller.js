const saleService = require("./sale.service");

const getSales = async (req, res) => {
  try {
    const response = await saleService.getSales();
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
const getSalesByUser = async (req, res) => {
  try {
    var user = {
      id: req.params.userId,
      type: req.params.userType,
    };
    const response = await saleService.getSalesByUser(user);
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

const createSale = async (req, res) => {
  try {
    const response = await saleService.createSale(req.body);
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

const deleteSale = async (req, res) => {
  try {
    const response = await saleService.deleteSale(req.body);
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
  getSales,
  createSale,
  getSalesByUser,
  deleteSale,
};
