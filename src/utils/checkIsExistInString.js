const isNotNumber = (character) => character < "0" || character > "9";

const isNotComma = (character) => character !== ",";

/**
 * @description target에 숫자가 아닌 문자가 존재하는지 확인
 * @param {string} target
 * @returns {boolean}
 */
export const isExistNotNumberInString = (target) =>
  target.split("").some((character) => isNotNumber(character));

/**
 * @description target에 숫자도 아니고 콤마(,)도 아닌 문자가 존재하는지 확인
 * @param {string} target
 * @returns {boolean}
 */
export const isExistNotNumberAndCommaInString = (target) =>
  target
    .split("")
    .some((character) => isNotNumber(character) && isNotComma(character));
