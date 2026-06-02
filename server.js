const express = require("express");
const messageRoutes = require("./routes/messageRoutes");
const corsMiddleware = require("./config/cors");

const app = express();

app.use(corsMiddleware);
app.use(express.json());

// Root route to show status and prevent "Cannot GET /" message on browser/Render health check
app.get("/", (req, res) => {
  res.send("Portfolio backend is running successfully!");
});

// Map routes to support both standard API paths and what the frontend expects
app.use("/api/messages", messageRoutes);
app.use("/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});