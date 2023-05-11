/* eslint-disable guard-for-in */
export default function orderByProps(object, array) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid array value');
  }

  let result = [];
  const etc = [];

  if (array.length === 0) {
    for (const key in object) {
      result.push({ key, value: object[key] });
    }
    result.sort((a, b) => a.key.localeCompare(b.key));
  } else {
    for (const key in object) {
      if (array.includes(key)) {
        result[array.indexOf(key)] = { key, value: object[key] };
      } else {
        etc.push({ key, value: object[key] });
      }
    }
    etc.sort((a, b) => a.key.localeCompare(b.key));
    result = result.concat(etc);
  }
  return result;
}
