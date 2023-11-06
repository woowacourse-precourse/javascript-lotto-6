import { EXCEPTION, LOTTO } from '../constants/constants.js';

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

/**
 * 보너스 번호와 당첨번호가 중복된지 체크하는 유효성 검사 함수
 * @param {number[]} numbers
 * @param {number} bonus
 */
export function checkBonusDuplicate(numbers, bonus) {
  if (numbers.includes(bonus)) {
    throw new Error(EXCEPTION.BONUS_DUPLICATE);
  }
}

export function checkMoneyValidate(money) {
  if (Number(money) % LOTTO.PRICE !== 0) {
    throw new Error(EXCEPTION.MONEY_DIVIDE_ERROR);
  }
}
