const express = require("express");
const router = express.Router();
const hospitalCtrl = require("../app/controllers/Hospitals");

//Route: DELETE delete hospital by id
router.delete("/delete/:id", hospitalCtrl.delete);

//Route: POST get all hospitals
router.post("/", hospitalCtrl.filter);

//Route: GET get all hospitals
router.get("/", hospitalCtrl.index);

module.exports = router;
