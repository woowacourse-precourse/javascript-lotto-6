import { NUMBER_RANGE, DELIMITER } from '../constants/Rule.js';
import { ERROR_MESSAGE } from '../constants/Message.js';
import CustomError from '../models/CustomError.js';

/**
 * 정수인지 판단
 * @param {number} number
 * @returns
 */
const isInteger = (number) => {
  return !Number.isNaN(number) && Number.isInteger(number);
};
/**
 * 번호가 1~45까지의 범위 내의 숫자인지 확인
 * @param {number} number
 */
const validateNumberRange = (number) => {
  const { min, max } = NUMBER_RANGE;
  if (number < min || number > max) throw new CustomError(ERROR_MESSAGE.range);
};

const hasNoDelimiter = (string) => {
  if (!string.includes(DELIMITER)) {
    throw new CustomError(ERROR_MESSAGE.noDelimiter);
  }
};

export { validateNumberRange, hasNoDelimiter, isInteger };
