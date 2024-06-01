// const multer = require("multer");
// const path = require("path");
// const storage = multer.diskStorage({
//   // DESTINATION DISEMPEN DIMANA?
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../files"));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });
// const upload = multer({ storage: storage });
// module.exports = upload;