const express = require("express");
const router = express.Router();
const chatMessengerCtrl = require("../app/controllers/ChatMessengers");

//Route: DELETE delete chatMessenger by id
router.delete("/delete/:id", chatMessengerCtrl.delete);

//Route: POST get all chatMessengers
router.post("/", chatMessengerCtrl.filter);

//Route: GET get all chatMessengers
router.get("/", chatMessengerCtrl.index);

module.exports = router;
