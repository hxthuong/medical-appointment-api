const Payments = require("../models/Payments");
require("dotenv").config();

class PaymentsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Payments.getAll(request);
      res.json({ message: "Lấy danh sách thanh toán thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Payments.getAll(request);
      res.json({ message: "Lấy danh sách thanh toán thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await Payments.add(request);
      res.json({ message: "Thanh toán thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Payments.delete({ ID });
      res.json({ message: "Xóa thanh toán thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new PaymentsController();
