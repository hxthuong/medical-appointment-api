const ChatMessengers = require("../models/ChatMessengers");
require("dotenv").config();
const baseUrl = process.env.BASE_URL;
const Files = require("../models/Files");

class ChatMessengersController {
  //GET /
  async index(req, res) {
    try {
      const request = req.query;
      const data = await ChatMessengers.getAll(request);
      res.json({ message: "Lấy danh sách tin nhắn thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /filter
  async filter(req, res) {
    try {
      const request = req.body;
      const data = await ChatMessengers.getAll(request);
      res.json({ message: "Lấy danh sách tin nhắn thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST /add
  async add(req, res) {
    try {
      const request = req.body;
      const data = await ChatMessengers.add(request);

      // Nếu có file upload → thêm vào bảng Files
      if (req.files && req.files.length > 0) {
        const filePromises = req.files.map((file) =>
          Files.add({
            FileName: file.originalname,
            FileType: file.mimetype,
            FileSize: file.size,
            FilePath: `${baseUrl}/uploads/messages/${file.filename}`,
            ReferenceID: data.ID, // Liên kết với ChatMessenger vừa tạo
            TableName: "MA_ChatMessengers",
          })
        );

        await Promise.all(filePromises); // chạy song song cho nhanh
      }

      res.json({ message: "Thêm tin nhắn thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //DELETE /delete/:id
  async delete(req, res) {
    try {
      const ID = req.params.id;
      const data = await ChatMessengers.delete({ ID });
      res.json({ message: "Xóa tin nhắn thành công", data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ChatMessengersController();
