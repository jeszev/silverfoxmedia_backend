const express = require("express");
const userController = require("./user.controller");

const userRouter = express.Router();

userRouter.get("/list", userController.getUser);
userRouter.post("/create", userController.createUser);
userRouter.delete("/delete/:id", userController.deleteUser);

module.exports = userRouter;
