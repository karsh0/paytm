const express = require("express");
const { accountmodel } = require("../Database/Db");
const { UserMiddleware } = require("../middleware/usermiddleware");
const { default: mongoose } = require("mongoose");
const AccountRouter = express.Router();

AccountRouter.get("/balance", UserMiddleware, async (req, res) => {
  const user = await accountmodel.findOne({
    userId: req.userId,
  });

  res.json({
    balance: user.balance,
  });
});

AccountRouter.post("/transfer", UserMiddleware, async (req, res) => {
    const {amount, to} = req.body;
    //this should be in transaction/session to avoid vulnerbilities
    const Sender = await accountmodel.findOneAndUpdate({userId: req.userId}, { $inc:{balance: -parseInt(amount)}})
    const Receiver = await accountmodel.findOneAndUpdate({userId: to},{ $inc:{balance: +parseInt(amount)}})
    
  res.json({
    message: Sender,
  });
});

module.exports = AccountRouter;
