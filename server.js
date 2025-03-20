require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const companyRoutes = require("./routes/companyRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/companies", companyRoutes);

app.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
