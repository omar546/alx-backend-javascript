export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8v = new Int8Array(buffer);
  if (position < buffer.byteLength || position >= 0) {
    int8v[position] = value;
  } else {
    throw new Error('Position outside range');
  }
  return buffer;
}
