export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const res = students.filter((el) => el.location === city);
  return res;
}
