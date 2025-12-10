const multer = require("multer");
const path = require("path");

function createUploader(folderName, allowedMimeTypes = ["image/"]) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) =>
      cb(null, path.join(__dirname, "..", "..", "uploads", folderName)),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
  });

  const fileFilter = (req, file, cb) => {
    // allowedMimeTypes có thể chứa "image/", "application/pdf", v.v.
    const isAllowed = allowedMimeTypes.some((type) =>
      file.mimetype.startsWith(type)
    );

    if (isAllowed) cb(null, true);
    else
      cb(
        new Error(`Only ${allowedMimeTypes.join(", ")} files are allowed!`),
        false
      );
  };

  return multer({ storage, fileFilter });
}

module.exports = { createUploader };
