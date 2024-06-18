const http = require('http');
const countStudents = require('./countStudents');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((data) => {
        let response = 'This is the list of our students\n';
        response += `Number of students: ${data.total}\n`;
        response += `Number of students in CS: ${data.cs.count}. List: ${data.cs.names.join(', ')}\n`;
        response += `Number of students in SWE: ${data.swe.count}. List: ${data.swe.names.join(', ')}`;
        res.end(response);
      }).catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

// define the hostname and port
const host = '127.0.0.1';
const port = 1245;

app.listen(port, host, () => { });

module.exports = app;
