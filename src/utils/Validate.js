import { ERROR_MESSAGE, NUMBER_RANGE } from '../constant';
import { DELIMITER } from '../constant/Rule';
import { throwError } from './MessageFactory';
/**
 * 번호가 1~45까지의 범위 내의 숫자인지 확인
 * @param {*} number
 */
const validateNumberRange = (number) => {
  const { min, max } = NUMBER_RANGE;
  if (number < min || number > max) throwError(ERROR_MESSAGE.range);
};

const hasNoDelimiter = (string) => {
  if (!string.includes(DELIMITER)) {
    throwError(ERROR_MESSAGE.noDelimiter);
  }
};

export { validateNumberRange, hasNoDelimiter };
