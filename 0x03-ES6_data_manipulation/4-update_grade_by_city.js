export default function updateStudentGradeByCity(students, city, grade) {
  return students
    .map((student) => {
      const newGrade = grade.find((el) => el.studentId === student.id);
      const updatedStudent = { ...student }; // Create a copy of the student object
      updatedStudent.grade = newGrade === undefined ? 'N/A' : newGrade.grade;
      return updatedStudent;
    })
    .filter((student) => student.location === city);
}
