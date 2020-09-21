const authService = require("./auth.service");

const signup = async (req, res) => {
  try {
    const response = await authService.signup(req.body);
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

const login = async (req, res) => {
  try {
    const response = await authService.login(req.body);
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
  signup,
  login,
};
