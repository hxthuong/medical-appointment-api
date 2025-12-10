const express = require("express");
const router = express.Router();
const paymentCtrl = require("../app/controllers/Payments");

//Route: POST add payment
router.post("/add", paymentCtrl.add);

//Route: DELETE delete payment by id
router.delete("/delete/:id", paymentCtrl.delete);

//Route: POST get all payments
router.post("/", paymentCtrl.filter);

//Route: GET get all payments
router.get("/", paymentCtrl.index);

module.exports = router;
