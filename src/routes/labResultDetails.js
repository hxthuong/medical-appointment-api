const express = require("express");
const router = express.Router();
const labResultDetailCtrl = require("../app/controllers/LabResultDetails");

//Route: POST add labResultDetail
router.post("/add", labResultDetailCtrl.add);

//Route: POST edit labResultDetail
router.post("/edit", labResultDetailCtrl.edit);

//Route: DELETE delete labResultDetail by id
router.delete("/delete/:id", labResultDetailCtrl.delete);

//Route: POST get all labResultDetails
router.post("/", labResultDetailCtrl.filter);

//Route: GET get all labResultDetails
router.get("/", labResultDetailCtrl.index);

module.exports = router;
