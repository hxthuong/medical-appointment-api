const express = require("express");
const router = express.Router();
const fileCtrl = require("../app/controllers/Files");

//Route: DELETE delete file by referenceID
router.delete("/delete/reference/:referenceID", fileCtrl.delete);

//Route: DELETE delete file by id
router.delete("/delete/:id", fileCtrl.delete);

//Route: POST get all files
router.post("/", fileCtrl.filter);

//Route: GET get all files
router.get("/", fileCtrl.index);

module.exports = router;
