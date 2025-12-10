const LabResults = require("../models/LabResults");
require("dotenv").config();
const baseUrl = process.env.BASE_URL || "http://localhost:3006";
const Files = require("../models/Files");

class LabResultsController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await LabResults.getAll(request);
      res.json({
        message: "Lấy danh sách kết quả xét nghiệm thành công",
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
      const data = await LabResults.getAll(request);
      res.json({
        message: "Lấy danh sách kết quả xét nghiệm thành công",
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
      // Nếu có file upload, thêm đường dẫn file vào bảng Files
      if (req.file) {
        await Files.add({
          FileName: req.file.originalname,
          FileType: req.file.mimetype,
          FileSize: req.file.size,
          FilePath: `${baseUrl}/uploads/labResults/${req.file.filename}`,
          ReferenceID: data.ID,
          TableName: "MA_LabResults",
        });
      }
      const data = await LabResults.add(request);
      res.json({ message: "Thêm kết quả xét nghiệm thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /edit
  async edit(req, res) {
    try {
      const request = req.body;
      const data = await LabResultDetails.edit(request);
      // Nếu có file upload, thêm đường dẫn file vào bảng Files
      if (req.file) {
        await Files.add({
          FileName: req.file.originalname,
          FileType: req.file.mimetype,
          FileSize: req.file.size,
          FilePath: `${baseUrl}/uploads/labResults/${req.file.filename}`,
          ReferenceID: data.ID,
          TableName: "MA_LabResults",
        });
      }
      res.json({ message: "Cập nhật kết quả xét nghiệm thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // DELETE /delete/:id hoặc /delete/appointment/:appointmentID
  async delete(req, res) {
    try {
      const { id, appointmentID } = req.params;
      let data;

      if (id) {
        // Xóa theo ID
        data = await LabResults.delete({ ID: id });
      } else if (appointmentID) {
        // Xóa theo AppointmentID
        data = await LabResults.delete({ AppointmentID: appointmentID });
      } else {
        return res
          .status(400)
          .json({ message: "Thiếu tham số ID hoặc AppointmentID" });
      }

      res.json({ message: "Xóa kết quả xét nghiệm thành công", data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new LabResultsController();
