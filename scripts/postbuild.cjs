const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const publicCname = path.join(projectRoot, 'public', 'CNAME');
const distCname = path.join(projectRoot, 'dist', 'CNAME');
const indexHtml = path.join(projectRoot, 'dist', 'index.html');
const notFound = path.join(projectRoot, 'dist', '404.html');

try {
  if (fs.existsSync(publicCname)) {
    fs.copyFileSync(publicCname, distCname);
    console.log('Copied CNAME to dist/');
  } else {
    console.log('No public/CNAME found — skipping CNAME copy.');
  }
} catch (err) {
  console.error('Error copying CNAME:', err);
}

try {
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, notFound);
    console.log('Created dist/404.html from index.html');
  } else {
    console.log('No dist/index.html found — skipping 404 generation.');
  }
} catch (err) {
  console.error('Error creating 404.html:', err);
}
