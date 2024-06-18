const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const fileData = await fs.readFile(path, { encoding: 'utf8', flag: 'r' });

    // Split the data into lines
    const filerows = fileData.split('\n').filter((line) => line !== '');

    // Remove the header row
    filerows.shift();

    // Count the students
    const students = filerows.map((line) => line.split(','));
    console.log(`Number of students: ${students.length}`);

    // Count the students in each field
    const fields = {};
    students.forEach((student) => {
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    });

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
