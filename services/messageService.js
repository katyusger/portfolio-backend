const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "../data");
const DATA_FILE = path.join(DATA_DIR, "messages.json");

const ensureDataFileExists = () => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    }
  } catch (error) {
    console.error("Error creating data directory or file:", error);
  }
};

const readMessages = () => {
  ensureDataFileExists();
  try {
    const rawData = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading messages database:", error);
    return [];
  }
};

const writeMessages = (data) => {
  ensureDataFileExists();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing messages database:", error);
  }
};

module.exports = { readMessages, writeMessages };