const express = require("express");
const router = express.Router();
const reviewCtrl = require("../app/controllers/Reviews");

//Route: POST add review
router.post("/add", reviewCtrl.add);

//Route: DELETE delete review by id
router.delete("/delete/:id", reviewCtrl.delete);

//Route: POST get all reviews
router.post("/", reviewCtrl.filter);

//Route: GET get all reviews
router.get("/", reviewCtrl.index);

module.exports = router;
