export default function iterateThroughObject(reportWithIterator) {
  let report = '';
  reportWithIterator.forEach((el, i) => {
    report += el;
    if (i < reportWithIterator.length - 1) {
      report += ' | ';
    }
  });
  return report;
}
