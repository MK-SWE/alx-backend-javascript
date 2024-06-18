const express = require('express');
const countStudents = require('./countStudents');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('./database.csv')
    .then((data) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${data.total}\n`;
      response += `Number of students in CS: ${data.cs.count}. List: ${data.cs.names.join(', ')}\n`;
      response += `Number of students in SWE: ${data.swe.count}. List: ${data.swe.names.join(', ')}`;
      res.send(response);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(port, () => { });

module.exports = app;
