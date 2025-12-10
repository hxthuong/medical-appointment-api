const express = require("express");
const router = express.Router();
const departmentCtrl = require("../app/controllers/Departments");

//Route: DELETE delete department by id
router.delete("/delete/:id", departmentCtrl.delete);

//Route: POST get all departments
router.post("/", departmentCtrl.filter);

//Route: GET get all departments
router.get("/", departmentCtrl.index);

module.exports = router;
