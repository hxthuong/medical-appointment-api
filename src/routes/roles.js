const express = require("express");
const router = express.Router();
const roleCtrl = require("../app/controllers/Roles");

//Route: POST add role
router.post("/add", roleCtrl.add);

//Route: POST edit role
router.post("/edit", roleCtrl.edit);

//Route: DELETE delete role by id
router.delete("/delete/:id", roleCtrl.delete);

//Route: POST get all roles
router.post("/", roleCtrl.filter);

//Route: GET get all roles
router.get("/", roleCtrl.index);

module.exports = router;
