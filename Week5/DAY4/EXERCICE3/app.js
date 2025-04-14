// app.js

const { readFile, writeFile } = require('./fileManager');

// Read content from "Hello World.txt"
const helloContent = readFile('Hello World.txt');
console.log("Read from Hello World.txt:", helloContent);

// Write to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');
console.log("Wrote new content to Bye World.txt");
