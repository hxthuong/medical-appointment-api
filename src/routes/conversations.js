const express = require("express");
const router = express.Router();
const conversationCtrl = require("../app/controllers/Conversations");

//Route: POST add conversation
router.post("/add", conversationCtrl.add);

//Route: DELETE delete conversation by id
router.delete("/delete/:id", conversationCtrl.delete);

//Route: POST get all conversations
router.post("/", conversationCtrl.filter);

//Route: GET get all conversations
router.get("/", conversationCtrl.index);

module.exports = router;
