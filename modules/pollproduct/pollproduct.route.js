const express = require("express");
const pollproductController = require("./pollproduct.controller");

const pollproductRouter = express.Router();

pollproductRouter.get("/list", pollproductController.getPollProduct);
pollproductRouter.post("/create", pollproductController.createPollProduct);
pollproductRouter.delete(
  "/delete/:id",
  pollproductController.deletePollProduct
);
pollproductRouter.get("/list/:id", pollproductController.getPollProductById);

module.exports = pollproductRouter;
