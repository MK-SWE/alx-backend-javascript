import { readDatabase } from '../utils'

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase();
      const fields = ['cs', 'swe'].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let responseText = 'This is the list of our students\n';
      fields.forEach((field) => {
        const students = data[field].names;
        responseText += `Number of students in ${field.toUpperCase()}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.statusCode = 200;
      res.send(responseText);
    } catch (error) {
      res.statusCode = 500;
      res.send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase();
      const students = data[major.toLowerCase()].names;
      const responseText = `List: ${students.join(', ')}`;

      res.statusCode = 200;
      res.send(responseText);
    } catch (error) {
      res.statusCode = 500;
      res.send('Cannot load the database');
    }
  }
}

export default StudentsController;
