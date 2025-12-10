const Users = require("../models/Users");
require("dotenv").config();
const baseUrl = process.env.BASE_URL || "http://localhost:3006";

class UsersController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Users.getAll(request);
      res.json({ message: "Lấy danh sách người dùng thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Users.getAll(request);
      res.json({ message: "Lấy danh sách người dùng thành công", data });
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
        request.Avatar = `${baseUrl}/uploads/avatars/${req.file.filename}`;
      }
      const data = await Users.add(request);
      res.json({ message: "Thêm người dùng thành công", data });
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
        request.Avatar = `${baseUrl}/uploads/avatars/${req.file.filename}`;
      }
      const data = await Users.edit(request);
      res.json({ message: "Cập nhật người dùng thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Users.delete({ ID });
      res.json({ message: "Xóa người dùng thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /login
  async login(req, res) {
    try {
      const request = req.body;
      const data = await Users.login(request);
      res.json({
        message:
          data.IsLogin === 1 ? "Đăng nhập thành công" : "Đăng xuất thành công",
        data,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /changePassword
  async changePassword(req, res) {
    try {
      const request = req.body;
      const data = await Users.changePassword(request);
      res.json({ message: "Đổi mật khẩu thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new UsersController();
