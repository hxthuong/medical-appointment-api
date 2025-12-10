const LabResultDetails = require("../models/LabResultDetails");
require("dotenv").config();

class LabResultDetailsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await LabResultDetails.getAll(request);
      res.json({
        message: "Lấy danh sách chi tiết xét nghiệm thành công",
        data,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await LabResultDetails.getAll(request);
      res.json({
        message: "Lấy danh sách chi tiết xét nghiệm thành công",
        data,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await LabResultDetails.add(request);
      res.json({
        message: "Thêm chi tiết kết quả xét nghiệm thành công",
        data,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /edit
  async edit(req, res) {
    try {
      const request = req.body;
      const data = await LabResultDetails.edit(request);
      res.json({
        message: "Cập nhật chi tiết kết quả xét nghiệm thành công",
        data,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await LabResultDetails.delete({ ID });
      res.json({ message: "Xóa chi tiết xét nghiệm thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new LabResultDetailsController();
