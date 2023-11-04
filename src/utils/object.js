/**
 * 모든 키값이 동일한지 체크합니다.
 * @param {object} obj
 * @param {object} otherObj
 * @returns {boolean}
 */
export const isSameKeyList = (obj, otherObj) => {
  const firstKeys = Object.keys(obj);
  const secondKeys = Object.keys(otherObj);

  return firstKeys.filter((key) => secondKeys.includes(key)).length === secondKeys.length;
};
