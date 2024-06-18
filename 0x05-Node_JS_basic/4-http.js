const http = require('node:http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1', () => {});

module.exports = app;
