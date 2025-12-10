const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

//Controllers
const chatMessengerCtrl = require("../app/controllers/ChatMessengers");
const departmentCtrl = require("../app/controllers/Departments");
const doctorCtrl = require("../app/controllers/Doctors");
const fileCtrl = require("../app/controllers/Files");
const hospitalCtrl = require("../app/controllers/Hospitals");
const labResultCtrl = require("../app/controllers/LabResults");
const userCtrl = require("../app/controllers/Users");

//Tạo upload folder cho từng loại
const messageUpload = upload.createUploader("messages");
const departmentUpload = upload.createUploader("departments");
const doctorUpload = upload.createUploader("doctors");
const fileUpload = upload.createUploader("files", [
  "image/",
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
]);
const hospitalUpload = upload.createUploader("hospitals");
const labResultUpload = upload.createUploader("labResults", [
  "image/",
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
]);
const avatarUpload = upload.createUploader("avatars");

//Tạo route
//Chat Messengers
//Route: POST add chatMessenger
router.post(
  "/chatMessenger/add",
  messageUpload.array("files", 10),
  chatMessengerCtrl.add
);

//Departments
//Route: POST add department
router.post(
  "/department/add",
  departmentUpload.single("file"),
  departmentCtrl.add
);
//Route: POST edit department
router.post(
  "/department/edit",
  departmentUpload.single("file"),
  departmentCtrl.edit
);

//Doctors
//Route: POST add doctor
router.post("/doctor/add", doctorUpload.array("files", 10), doctorCtrl.add);
//Route: POST edit doctor
router.post("/doctor/edit", doctorUpload.array("files", 10), doctorCtrl.edit);

//Files
//Route: POST add file
router.post("/file/add", fileUpload.single("file"), fileCtrl.add);

//Hospitals
//Route: POST add hospital
router.post("/hospital/add", hospitalUpload.single("file"), hospitalCtrl.add);
//Route: POST edit hospital
router.post("/hospital/edit", hospitalUpload.single("file"), hospitalCtrl.edit);

//Lab Results
//Route: POST add labResult
router.post(
  "/labResult/add",
  labResultUpload.single("file"),
  labResultCtrl.add
);
//Route: POST edit labResult
router.post(
  "/labResult/edit",
  labResultUpload.single("file"),
  labResultCtrl.edit
);

//Users
//Route: POST add user
router.post("/user/add", avatarUpload.single("file"), userCtrl.add);
//Route: POST edit user
router.post("/user/edit", avatarUpload.single("file"), userCtrl.edit);

module.exports = router;
