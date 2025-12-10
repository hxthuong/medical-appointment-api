const Services = require("../models/Services");
require("dotenv").config();

class ServicesController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Services.getAll(request);
      res.json({ message: "Lấy danh sách dịch vụ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Services.getAll(request);
      res.json({ message: "Lấy danh sách dịch vụ thành công", data });
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
        request.ServiceIcon = `${baseUrl}/uploads/services/${req.file.filename}`;
      }
      const data = await Services.add(request);
      res.json({ message: "Thêm dịch vụ thành công", data });
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
        request.ServiceIcon = `${baseUrl}/uploads/services/${req.file.filename}`;
      }
      const data = await Services.edit(request);
      res.json({ message: "Cập nhật dịch vụ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Services.delete({ ID });
      res.json({ message: "Xóa dịch vụ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ServicesController();
