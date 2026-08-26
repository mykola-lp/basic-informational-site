const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = 8080;

// Docs: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((req, res) => {
  // TODO 1: Get the path from the request (req.url)
  const url = req.url;

  // TODO 2: Determine which HTML file to serve based on the path:
  //   '/'            -> index.html
  //   '/about'       -> about.html
  //   '/contact-me'  -> contact-me.html
  //   any other path -> 404.html
  let fileName;

  switch (url) {
    case '/':
      fileName = 'index.html';
      break;

    case '/about':
      fileName = 'about.html';
      break;

    case '/contact-me':
      fileName = 'contact-me.html';
      break;

    default:
      fileName = '404.html';
  }

  const filePath = path.join(__dirname, 'pages', fileName);

  // TODO 3: Read the corresponding file (fs.readFile)
  //   https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs

  // TODO 4: Send the file's content to the client (res.writeHead + res.end)

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Server is running. Add the page-serving logic in index.js (see TODOs)');
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});