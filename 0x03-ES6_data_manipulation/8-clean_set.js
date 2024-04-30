/* eslint-disable array-callback-return */
export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((el) => (el !== undefined ? el.startsWith(startString) : ''))
    .map((el) => (el !== undefined ? el.slice(startString.length) : ''))
    .join('-');
}
