/**
 * 모든 키값이 동일한지 체크합니다.
 * @param {object} obj 비교할 객체입니다.
 * @param {object} otherObj 비교 대상이 될 객체입니다.
 * @returns {boolean} 객체 키값의 동일 여부입니다.
 */
export const isSameKeyList = (obj, otherObj) => {
  const firstKeys = Object.keys(obj);
  const secondKeys = Object.keys(otherObj);

  return firstKeys.filter((key) => secondKeys.includes(key)).length === secondKeys.length;
};

const isObjectOrNull = (value) => typeof value !== 'object' || value === null;

/**
 * 모든 키와 값이 동일한지 체크합니다.
 * @param {object} obj 비교할 객체입니다.
 * @param {object} otherObj 비교 대상이 될 객체입니다.
 * @returns {boolean} 객체의 동일 여부입니다.
 */
export const isEqualObject = (obj, otherObj) => {
  if (obj === otherObj) return true;
  if (isObjectOrNull(obj) || isObjectOrNull(otherObj)) return false;
  const keys1 = Object.keys(obj);
  const keys2 = Object.keys(otherObj);
  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => otherObj[key] && isEqualObject(obj[key], otherObj[key]));
};
