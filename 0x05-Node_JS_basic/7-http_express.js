const express = require('express');
const countStudents = require('./countStudents');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((data) => {
      res.send(['This is the list of our students', data].join('\n'));
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(port, () => { });

module.exports = app;
