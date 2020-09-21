const express = require("express");
const authRouter = require("../modules/auth/auth.route");
const productRouter = require("../modules/product/product.route");
const saleRouter = require("../modules/sale/sale.route");
const userRouter = require("../modules/user/user.route");
const pollproductRouter = require("../modules/pollproduct/pollproduct.route");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/product", productRouter);
apiRouter.use("/sale", saleRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/pollproduct", pollproductRouter);

module.exports = apiRouter;
