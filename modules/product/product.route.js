const express = require("express");
const productController = require("./product.controller");

const productRouter = express.Router();

productRouter.get("/list", productController.getProducts);
productRouter.post("/create", productController.createProduct);
productRouter.delete("/delete/:id", productController.deleteProduct);
productRouter.get("/listcat/:name", productController.getProductsByCategory);
productRouter.get("/listspec/:name", productController.getProductsBySpec);

module.exports = productRouter;
