const { readMessages, writeMessages } = require("../services/messageService");

const getMessages = (req, res) => {
  try {
    const messages = readMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to load messages" });
  }
};

const addMessage = (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  try {
    const messages = readMessages();
    messages.push({ name, message, date: new Date().toISOString() });
    writeMessages(messages);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
};

module.exports = { getMessages, addMessage };