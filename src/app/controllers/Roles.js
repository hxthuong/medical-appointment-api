const Roles = require("../models/Roles");
require("dotenv").config();

class RolesController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Roles.getAll(request);
      res.json({ message: "Lấy danh sách vai trò thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Roles.getAll(request);
      res.json({ message: "Lấy danh sách vai trò thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await Roles.add(request);
      res.json({ message: "Thêm vai trò thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /edit
  async edit(req, res) {
    try {
      const request = req.body;
      const data = await Roles.edit(request);
      res.json({ message: "Cập nhật vai trò thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Roles.delete({ ID });
      res.json({ message: "Xóa vai trò thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new RolesController();
