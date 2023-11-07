import {
  NUMBER_MAX_LENGTH,
  NUMBER_MIN_LENGTH,
  RANGE,
} from '../../constants/lotto/numbers';
import ERROR_MESSAGES from '../../constants/message/error';
import ValidationError from '../../error/Validation';

const validationUtils = {
  isString: (input) => {
    if (typeof input !== 'string') {
      throw new ValidationError(ERROR_MESSAGES.stringType);
    }
  },

  isInteger: (input) => {
    if (Number.isInteger(input) === false) {
      throw new ValidationError(ERROR_MESSAGES.numberType);
    }
  },

  isArray: (input) => {
    if (Array.isArray(input) === false) {
      throw new ValidationError(ERROR_MESSAGES.arrayType);
    }
  },

  isObject: (input) => {
    if (typeof input !== 'object' || obj === null) {
      throw new ValidationError(ERROR_MESSAGES.objectType);
    }
  },

  /**
   * 배열안에 정수타입만 있는지 확인한다
   * @param {number[]} numbers
   */
  isArrayValueTypeNumber: (numbers) => {
    const ret = numbers.map((number) => typeof number === 'number');
    if (ret.includes(false)) {
      throw new ValidationError(ERROR_MESSAGES.notNumberArray);
    }
  },

  /**
   * 문자열이 0으로 시작하는지 확인한다
   * @param {string} input
   */
  zeroIndexValueNotZero: (input) => {
    if (input[0] !== '0') {
      throw new ValidationError(ERROR_MESSAGES.stringFirstCharactorZero);
    }
  },

  /**
   * 문자열 길이가 1~2 인지 확인한다.
   * @param {string} input
   */
  checkStringLength: (input) => {
    if (input.length < NUMBER_MIN_LENGTH || input.length > NUMBER_MAX_LENGTH) {
      throw new ValidationError(ERROR_MESSAGES.numberMaxLength);
    }
  },

  /**
   * 숫자 범위 체크
   * @param {number} number
   */
  checkRange: (number) => {
    if (number < RANGE.smallNumber || number > RANGE.largestNumber) {
      throw new ValidationError(ERROR_MESSAGES.outOfRange);
    }
  },

  /**
   * 문자열 안에 숫자만 존재하는지 확인한다
   * @param {string} input
   */
  checkConvertStringToNumber: (input) => {
    const regularExpression = /^[0-9]+$/;
    if (regularExpression.test(input) === false) {
      throw new ValidationError(ERROR_MESSAGES.outOfRange);
    }
  },

  /**
   * 배열 중복체크
   * @param {Array} input
   */
  checkArrayDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new ValidationError(ERROR_MESSAGES.duplicate);
    }
  },
};

export default validationUtils;
