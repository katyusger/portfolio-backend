const express = require("express");
const messageRoutes = require("./routes/messageRoutes");
const corsMiddleware = require("./config/cors");

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.use("/api/messages", messageRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});