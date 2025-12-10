const Hospitals = require("../models/Hospitals");
require("dotenv").config();

class HospitalsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Hospitals.getAll(request);
      res.json({ message: "Lấy danh sách bệnh viện thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Hospitals.getAll(request);
      res.json({ message: "Lấy danh sách bệnh viện thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      // Nếu có file upload, thêm đường dẫn file vào data
      if (req.file) {
        request.Images = `${baseUrl}/uploads/hospitals/${req.file.filename}`;
      }
      const data = await Hospitals.add(request);
      res.json({ message: "Thêm bệnh viện thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /edit
  async edit(req, res) {
    try {
      const request = req.body;
      // Nếu có file upload, thêm đường dẫn file vào data
      if (req.file) {
        request.Images = `${baseUrl}/uploads/hospitals/${req.file.filename}`;
      }
      const data = await Hospitals.edit(request);
      res.json({ message: "Cập nhật bệnh viện thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Hospitals.delete({ ID });
      res.json({ message: "Xóa bệnh viện thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new HospitalsController();
