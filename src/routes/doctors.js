const express = require("express");
const router = express.Router();
const doctorCtrl = require("../app/controllers/Doctors");

//Route: DELETE delete doctor by id
router.delete("/delete/:id", doctorCtrl.delete);

//Route: POST get all doctors
router.post("/", doctorCtrl.filter);

//Route: GET get all doctors
router.get("/", doctorCtrl.index);

module.exports = router;
