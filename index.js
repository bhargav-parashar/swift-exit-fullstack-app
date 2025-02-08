const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connect");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const adminRoute = require("./routes/admin.routes");

dotenv.config();

const server = express();
const PORT = process.env.PORT;

connectDB();

server.use(express.json());
server.use(cors());

server.use("/api/auth", authRoute);
server.use("/api/user", userRoute);
server.use("/api/admin", adminRoute);

server.listen(PORT,()=>console.log(`Server running on PORT : ${PORT}`));