import { EXCEPTION } from '../constants/constants.js';

/**
 * 로또 번호가 6개인 체크하는 유효성 검사 함수
 * @param {number[]} numbers
 */
export function checkSixNumbers(numbers) {
  if (numbers.length !== 6) {
    throw new Error(EXCEPTION.LOTTO_MUST_SIX_NUMBERS);
  }
}

/**
 * 로또 번호가 1~45까지의 정수인지 체크하는 유효성 검사 함수
 * @param {number} number
 */
export function checkNumberInRange(number) {
  if (!/^(?:[1-9]|[1-3][0-9]|4[0-5])$/.test(number)) {
    throw new Error(EXCEPTION.LOTTO_MUST_IN_RANGE);
  }
}

/**
 * 로또 번호에 중복된 숫자가 있는지 체크하는 유효성 검사 함수
 * @param {number[]} numbers
 */
export function checkDuplicate(numbers) {
  const setNumbers = new Set(numbers);

  if (setNumbers.size !== numbers.length) {
    throw new Error(EXCEPTION.LOTTO_DUPLICATE);
  }
}
