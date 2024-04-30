export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const res = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      const chunk = item.slice(startString.length);
      res.push(chunk);
    }
  }
  return res.join('-');
}
