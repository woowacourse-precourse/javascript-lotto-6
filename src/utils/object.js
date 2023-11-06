/**
 * @param {object} object - 객체
 * @returns {boolean} 빈 객체인지 판별하기 위한 불리언
 */
export const isEmptyObject = (object) => Object.keys(object).length === 0;
