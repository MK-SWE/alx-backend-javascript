const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const majors = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const row = data.toString().split('\n');
        for (let i = 0; i < row.length; i += 1) {
          if (row[i]) {
            length += 1;
            const field = row[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(majors, field[3])) {
              majors[field[3]] += 1;
            } else {
              majors[field[3]] = 1;
            }
          }
        }
        const output = {
          total: length - 1,
          cs: {
            count: majors['CS'],
            names: students['CS']
          },
          swe: {
            count: majors['SWE'],
            names: students['SWE']
          }
        };
        resolve(output);
      }
    });
  });
}

module.exports = countStudents;