const Conversations = require("../models/Conversations");
require("dotenv").config();

class ConversationsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Conversations.getAll(request);
      res.json({ message: "Lấy danh sách cuộc hội thoại thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Conversations.getAll(request);
      res.json({ message: "Lấy danh sách cuộc hội thoại thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await Conversations.add(request);
      res.json({ message: "Thêm cuộc hội thoại thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Conversations.delete({ ID });
      res.json({ message: "Xóa cuộc hội thoại thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ConversationsController();
