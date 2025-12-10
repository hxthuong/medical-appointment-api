const express = require("express");
const router = express.Router();
const userCtrl = require("../app/controllers/Users");

//Route: DELETE delete user by id
router.delete("/delete/:id", userCtrl.delete);

//Route: POST get all users
router.post("/", userCtrl.filter);

//Route: GET get all users
router.get("/", userCtrl.index);

module.exports = router;
