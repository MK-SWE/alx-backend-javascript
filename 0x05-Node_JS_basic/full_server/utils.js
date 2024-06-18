import { readFile } from 'fs';

export default function readDatabase(filePath) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const rows = data.toString().split('\n');
        rows.shift();
        for (let i = 0; i < rows.length; i += 1) {
          if (rows[i]) {
            const field = rows[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
}
