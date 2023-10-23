const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5000;

const server = http.createServer(function(req, res) {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(path.join(__dirname, 'index.html'), function(error, data) {
      if (error) {
        res.writeHead(404);
        res.write('Error: File Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.readFile(path.join(__dirname, 'style.css'), function(error, data) {
      if (error) {
        res.writeHead(404);
        res.write('Error: File Not Found');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url.startsWith('/pictures/')) {
    const imagePath = path.join(__dirname, 'pictures', req.url.substring(10));
    const imageStream = fs.createReadStream(imagePath);
    imageStream.on('open', function() {
      res.writeHead(200, { 'Content-Type': 'image/png' }); // Adapt the content type according to your image format
      imageStream.pipe(res);
    });
    imageStream.on('error', function() {
      res.writeHead(404);
      res.end('Error: Image Not Found');
    });
  } else if (req.url.startsWith('/scripts/')) {
    const scriptPath = path.join(__dirname, 'scripts', req.url.substring(9));
    fs.readFile(scriptPath, function(error, data) {
      if (error) {
        res.writeHead(404);
        res.write('Error: File Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('Error: File Not Found');
    res.end();
  }
});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});
