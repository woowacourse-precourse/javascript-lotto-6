import { ERROR_MESSAGE, LOTTO_FORM } from '../constant';
import { getErrorMessage, throwError } from './MessageFactory';
/**
 * 번호가 1~45까지의 범위 내의 숫자인지 확인
 * @param {*} number
 */
const validateNumberRange = (number) => {
  const { range } = LOTTO_FORM;
  if (number < range.min || number > range.max) throwError(ERROR_MESSAGE.range);
};

//유지
const hasNoReset = (string) => {
  if (!string.includes(','))
    throw new Error(getErrorMessage(ERROR_MESSAGE.noReset));
};

// 보너스 볼
const hasNoBonusBall = (...args) => {
  const { numbers, bonusBall } = args;
  if (numbers.contains(bonusBall)) throw new Error();
};

export { validateNumberRange };
