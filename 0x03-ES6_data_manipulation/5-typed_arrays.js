export default function createInt8TypedArray(len, pos, val) {
  if (pos > len) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);
  view.setInt8(pos, val);
  return view;
}
