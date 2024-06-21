const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set response status code to 200 (OK)

  res.statusCode = 200;
  // Set response content type to plain text

  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  
  res.end('Hello Holberton School!');
});

// Server listens on port 1245 at localhost (127.0.0.1)
app.listen(1245, '127.0.0.1');

// Export the app module
module.exports = app;
