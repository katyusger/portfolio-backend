const express = require("express");
const router = express.Router();

const {
  getMessages,
  addMessage
} = require("../controllers/messageController");

router.get("/", getMessages);
router.post("/", addMessage);

module.exports = router;