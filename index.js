const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./db/db");

dotenv.config();


const app = express();

app.use("/auth", require("./routes/userRoutes"));
// connect database
connectToDatabase();

// test route
app.get("/", (req, res) => {
  res.send("AeshaHang Rai.. backend is running 🚀");
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});