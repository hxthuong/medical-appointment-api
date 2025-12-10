const Departments = require("../models/Departments");
require("dotenv").config();

class DepartmentsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Departments.getAll(request);
      res.json({ message: "Lấy danh sách khoa phòng thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Departments.getAll(request);
      res.json({ message: "Lấy danh sách khoa phòng thành công", data });
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
        request.Images = `${baseUrl}/uploads/departments/${req.file.filename}`;
      }
      const data = await Departments.add(request);
      res.json({ message: "Thêm khoa phòng thành công", data });
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
        request.Images = `${baseUrl}/uploads/departments/${req.file.filename}`;
      }
      const data = await Departments.edit(request);
      res.json({ message: "Cập nhật khoa phòng thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Departments.delete({ ID });
      res.json({ message: "Xóa khoa phòng thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new DepartmentsController();
