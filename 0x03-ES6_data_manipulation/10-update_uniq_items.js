/* eslint-disable consistent-return */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) return;
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
