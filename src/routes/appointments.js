const express = require("express");
const router = express.Router();
const appointmentCtrl = require("../app/controllers/Appointments");

//Route: POST add appointment
router.post("/add", appointmentCtrl.add);

//Route: POST edit appointment
router.post("/edit", appointmentCtrl.edit);

//Route: DELETE delete appointment by id
router.delete("/delete/:id", appointmentCtrl.delete);

//Route: POST get all appointments
router.post("/", appointmentCtrl.filter);

//Route: GET get all appointments
router.get("/", appointmentCtrl.index);

module.exports = router;
