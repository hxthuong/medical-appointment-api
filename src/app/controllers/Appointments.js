const Appointments = require("../models/Appointments");
require("dotenv").config();

class AppointmentsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Appointments.getAll(request);
      res.json({ message: "Lấy danh sách lịch khám thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Appointments.getAll(request);
      res.json({ message: "Lấy danh sách lịch khám thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await Appointments.add(request);
      res.json({ message: "Thêm lịch khám thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /edit
  async edit(req, res) {
    try {
      const request = req.body;
      const data = await Appointments.edit(request);
      res.json({ message: "Cập nhật lịch khám thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Appointments.delete({ ID });
      res.json({ message: "Xóa lịch khám thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new AppointmentsController();
