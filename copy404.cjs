// copy404.js
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');
const indexFile = path.join(distDir, 'index.html');
const errorFile = path.join(distDir, '404.html');

fs.copyFileSync(indexFile, errorFile);
console.log('404.html wurde aus index.html erstellt.');
