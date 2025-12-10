const express = require("express");
const router = express.Router();
const labResultCtrl = require("../app/controllers/LabResults");

//Route: DELETE delete labResult by appointmentID
router.delete("/delete/appointment/:appointmentID", labResultCtrl.delete);

//Route: DELETE delete labResult by id
router.delete("/delete/:id", labResultCtrl.delete);

//Route: POST get all labResults
router.post("/", labResultCtrl.filter);

//Route: GET get all labResults
router.get("/", labResultCtrl.index);

module.exports = router;
