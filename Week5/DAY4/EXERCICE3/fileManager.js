// fileManager.js

const fs = require('fs');

// Read content from a file
function readFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
}

// Write content to a file
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

module.exports = {
  readFile,
  writeFile
};
