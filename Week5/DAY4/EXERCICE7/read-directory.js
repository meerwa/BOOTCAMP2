// read-directory.js

const fs = require('fs');

// Read all files in the current directory
const files = fs.readdirSync('.');

console.log('📂 Files in the directory:');
files.forEach(file => {
  console.log('- ' + file);
});
