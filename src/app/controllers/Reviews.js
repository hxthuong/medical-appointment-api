const Reviews = require("../models/Reviews");
require("dotenv").config();

class ReviewsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Reviews.getAll(request);
      res.json({ message: "Lấy danh sách đánh giá thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Reviews.getAll(request);
      res.json({ message: "Lấy danh sách đánh giá thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await Reviews.add(request);
      res.json({ message: "Thêm đánh giá thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Reviews.delete({ ID });
      res.json({ message: "Xóa đánh giá thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ReviewsController();
