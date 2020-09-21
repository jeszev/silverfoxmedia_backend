const userService = require("./user.service");

const getUser = async (req, res) => {
  try {
    const response = await userService.getUser();
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

const getUserById = async (req, res) => {
  try {
    var user = {
      id: req.params.id,
    };
    const response = await userService.getUserById(user);
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

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
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

const deleteUser = async (req, res) => {
  try {
    const response = await userService.deleteUser(req.body);
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
  getUser,
  getUserById,
  createUser,
  deleteUser,
};
