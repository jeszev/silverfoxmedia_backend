const express = require("express");
const saleController = require("./sale.controller");

const saleRouter = express.Router();

saleRouter.get("/list", saleController.getSales);
saleRouter.get("/list/:userId/:userType", saleController.getSalesByUser);
saleRouter.post("/create", saleController.createSale);
saleRouter.delete("/delete/:id", saleController.deleteSale);

module.exports = saleRouter;
