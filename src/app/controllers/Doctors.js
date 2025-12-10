const Doctors = require("../models/Doctors");
require("dotenv").config();
const baseUrl = process.env.BASE_URL || "http://localhost:3006";
const Files = require("../models/Files");

class DoctorsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Doctors.getAll(request);
      res.json({ message: "Lấy danh sách bác sĩ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Doctors.getAll(request);
      res.json({ message: "Lấy danh sách bác sĩ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res, next) {
    try {
      const request = req.body;
      const data = await Doctors.add(request);

      // Nếu có file upload → thêm vào bảng Files
      if (req.files && req.files.length > 0) {
        const filePromises = req.files.map((file) =>
          Files.add({
            FileName: file.originalname,
            FileType: file.mimetype,
            FileSize: file.size,
            FilePath: `${baseUrl}/uploads/licenses/${file.filename}`,
            ReferenceID: data.ID, // Liên kết với Doctor vừa tạo
            TableName: "MA_Doctors",
          })
        );

        await Promise.all(filePromises); // chạy song song cho nhanh
      }

      res.json({ message: "Thêm bác sĩ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(error);
    }
  }

  //POST /edit
  async edit(req, res, next) {
    try {
      const request = req.body;
      const data = await Doctors.edit(request);

      // Nếu có file upload → thêm vào bảng Files
      if (req.files && req.files.length > 0) {
        const filePromises = req.files.map((file) =>
          Files.add({
            FileName: file.originalname,
            FileType: file.mimetype,
            FileSize: file.size,
            FilePath: `${baseUrl}/uploads/licenses/${file.filename}`,
            ReferenceID: data.ID, // Liên kết với Doctor vừa tạo
            TableName: "MA_Doctors",
          })
        );

        await Promise.all(filePromises); // chạy song song cho nhanh
      }

      res.json({ message: "Cập nhật bác sĩ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
      next(error);
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await Doctors.delete({ ID });
      res.json({ message: "Xóa bác sĩ thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new DoctorsController();
