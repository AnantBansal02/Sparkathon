const path = require("path");
const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const authRoutes = require("./routes/auth");
const dashRoutes = require("./routes/dash")

const connectToDb = require("./DB/connectToDb");
const app = express();
// //for deployment
// const dirname = path.resolve();

dotenv.config();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const Port = 5000;
app.use("/auth", authRoutes);
app.use("/dash", dashRoutes);

// //for deployment
// app.use(express.static(path.join(dirname, "/frontend/build")));
// app.get("*", (req,res) => {
//     res.sendFile(path.join(dirname, "frontend", "build", "index.html"));
// });

app.listen(Port,()=> {
    connectToDb()
    console.log(`App running on port ${Port}`)
});