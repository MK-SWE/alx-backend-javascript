export default function iterateThroughObject(reportWithIterator) {
  let report = '';
  reportWithIterator.forEach((el, i) => {
    if (i < reportWithIterator.length) {
      report += `${el} | `;
    } else {
      report += el;
    }
  });
  return report;
}
