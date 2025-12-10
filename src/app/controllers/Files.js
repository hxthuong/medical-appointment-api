const Files = require("../models/Files");
require("dotenv").config();
const baseUrl = process.env.BASE_URL;

class FilesController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await Files.getAll(request);
      res.json({ message: "Lấy danh sách file thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await Files.getAll(request);
      res.json({ message: "Lấy danh sách file thành công", data });
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
        request.FileName = req.file.originalname;
        request.FileType = req.file.mimetype;
        request.FileSize = req.file.size;
        request.FilePath = `${baseUrl}/uploads/files/${req.file.filename}`;
      }
      const data = await Files.add(request);
      res.json({ message: "Thêm file thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // DELETE /delete/:id hoặc /delete/reference/:referenceID
  async delete(req, res) {
    try {
      const { id, referenceID } = req.params;
      let data;

      if (id) {
        // Xóa theo ID
        data = await Files.delete({ ID: id });
      } else if (referenceID) {
        // Xóa theo ReferenceID
        data = await Files.delete({ ReferenceID: referenceID });
      } else {
        return res
          .status(400)
          .json({ message: "Thiếu tham số ID hoặc ReferenceID" });
      }

      res.json({ message: "Xóa file thành công", data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new FilesController();
