const express = require("express");
const router = express.Router();
const serviceCtrl = require("../app/controllers/Services");

//Route: POST add service
router.post("/add", serviceCtrl.add);

//Route: POST edit service
router.post("/edit", serviceCtrl.edit);

//Route: DELETE delete service by id
router.delete("/delete/:id", serviceCtrl.delete);

//Route: POST get all services
router.post("/", serviceCtrl.filter);

//Route: GET get all services
router.get("/", serviceCtrl.index);

module.exports = router;
