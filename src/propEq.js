export default function propEq(key, value, obj) {
  return value === obj[key] ? true : false;
}
