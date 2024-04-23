export default function createIteratorObject(report) {
  const allEmp = [];
  const keys = Object.keys(report.allEmployees);
  for (const key of keys) {
    allEmp.push(...report.allEmployees[key]);
  }
  return allEmp;
}
