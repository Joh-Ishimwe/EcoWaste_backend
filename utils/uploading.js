// import multer from "multer"
// import path from "path"

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "images")
//     },
//     filename: function (req, file, cb) {
//     //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname )
//     }
//   })
  
//   const upload = multer({ storage: storage }).fields([
//     { name: 'profilePicture', maxCount: 1 },
//     { name: 'image', maxCount: 1 },
   
//   ]);
//   export default upload