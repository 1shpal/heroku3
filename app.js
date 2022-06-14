 const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@cluster0.9ei6p.mongodb.net/BookMyMeal?retryWrites=true&w=majority"
);
const cors = require("cors");
const path = require("path");
const adminRouter = require("./routes/admin.route");
const userRouter = require("./routes/user.route");
const port = process.env.PORT || 5555;
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//lhf  dsjh df
module.exports = mongoose.connection;

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("server Started");  
});
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyARJ_hgfHwdmoAfHA7G0EARTCU6j5StXZE",
//   authDomain: "uploadimage-92138.firebaseapp.com",
//   projectId: "uploadimage-92138",
//   storageBucket: "uploadimage-92138.appspot.com",
//   messagingSenderId: "754028041175",
//   appId: "1:754028041175:web:649a6de6404d9aa414f192",
//   measurementId: "G-P29LE85PMC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyARJ_hgfHwdmoAfHA7G0EARTCU6j5StXZE",
//   authDomain: "uploadimage-92138.firebaseapp.com",
//   projectId: "uploadimage-92138",
//   storageBucket: "uploadimage-92138.appspot.com",
//   messagingSenderId: "754028041175",
//   appId: "1:754028041175:web:3d525b675d0df08514f192",
//   measurementId: "G-8FMD0HE84K"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);






//gs://uploadimage-92138.appspot.com            FILES URL



//https://console.firebase.google.com/u/0/project/uploadimage-92138/storage/uploadimage-92138.appspot.com/files       FIRE BASE URL