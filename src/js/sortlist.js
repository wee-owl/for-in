export default function orderByProps(object, array) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid array value');
  }

  let result = [];
  const etc = [];

  for (const key in object) {
    if (array.includes(key)) {
      result[array.indexOf(key)] = { key, value: object[key] };
    } else {
      etc.push({ key, value: object[key] });
    }
  }
  etc.sort((a, b) => a.key.localeCompare(b.key));
  result = result.concat(etc);

  return result;
}
