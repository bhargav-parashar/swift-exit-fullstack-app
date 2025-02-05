const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connect");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth.routes");

dotenv.config();

const server = express();
const PORT = process.env.PORT;

connectDB();

server.use(express.json());
server.use(cors());

server.use("/api/auth",authRoute);

server.listen(PORT,()=>console.log(`Server running on PORT : ${PORT}`));