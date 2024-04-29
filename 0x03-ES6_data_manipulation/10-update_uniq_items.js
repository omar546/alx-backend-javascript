export default function updateUniqueItems(oldMap) {
  if (!(oldMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  Array.from(oldMap.keys()).forEach((key) => {
    if (oldMap.get(key) === 1) {
      oldMap.set(key, 100);
    }
  });
}
