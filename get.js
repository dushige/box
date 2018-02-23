/**
 * get property from object or array.
 * param Object|Array obj
 * param Stringpath
 * param any defaultValue
 * eg:
 *    let obj = {name: 'jarone', age: 18, book: {name: 'moonman'}};
 *    get(obj, 'book.name') //moonman
 *    get(obj, 'moive.name', 'none') //none
 */
function get (obj, path, defaultValue) {
  let getType = arg => Object.prototype.toString.call(arg);

  if (!~['[object Object]', '[object Array]'].indexOf(getType(obj))) return defaultValue;

  if (getType(path) !== '[object String]') return defaultValue;

  if (Object.hasOwnProperty.call(obj, path)) return obj[path];

  let result = undefined;

  path.split('.').reduce((accumulator, currentValue) => {
    result = accumulator && accumulator[currentValue] || defaultValue;
    return result;
  }, obj);

  return result;
}
