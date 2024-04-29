export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const res = students.map((el) => el.id);
  return res;
}
