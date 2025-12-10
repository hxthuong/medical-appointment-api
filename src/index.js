const express = require("express");
const app = express();
const db = require("./config/db");
const port = 3006;
const path = require("path");
const cors = require("cors");
const route = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cho phép truy cập thư mục uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(cors());

db.connect(); // kết nối DB

// init các route khác
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
