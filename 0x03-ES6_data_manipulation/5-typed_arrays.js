export default function createInt8TypedArray(len, pos, val) {
  const uint8 = new Uint8Array(len);
  if (pos > len) throw new Error('Position outside range');
  uint8[pos] = val;
  return uint8;
}
