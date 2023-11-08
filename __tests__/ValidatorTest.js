import { CONSTANT, ERROR, LOTTO_NUMBER } from '../src/constants/Constant.js';
import Validator from '../src/validator/Validator.js';

describe('검증 메서드 테스트', () => {
  test.each([['hi'], ['My name is yuna'], ['']])(
    '입력값이 숫자가 아니면 예외가 발생한다',
    (input) => {
      expect(() => Validator.checkIsNotNumber(input)).toThrow(ERROR.isNotNumber);
    },
  );

  test.each([[1], [10000], [-32]])('입력값이 숫자면 예외가 발생하지 않는다', (input) => {
    expect(() => Validator.checkIsNotNumber(input)).not.toThrow(ERROR.isNotNumber);
  });

  test.each([[1500], [500], [372.27]])(
    `입력값이 ${CONSTANT.amountUnit} 단위가 아니면 예외가 발생한다.`,
    (input) => {
      expect(() => Validator.checkIsNotInUnit(input)).toThrow(ERROR.isNotInAmountUnit);
    },
  );

  test.each([[1000], [10000], [1200000]])(
    `입력값이 ${CONSTANT.amountUnit} 단위면 예외가 발생하지 않는다.`,
    (input) => {
      expect(() => Validator.checkIsNotInUnit(input)).not.toThrow(ERROR.isNotInAmountUnit);
    },
  );

  test.each([[-1], [0], ['-37.02']])('입력값이 양수가 아니면 예외가 발생한다.', (input) => {
    expect(() => Validator.checkIsNotPositive(input)).toThrow(ERROR.isNotPositive);
  });

  test.each([[1], [100], ['37.02']])('입력값이 양수면 예외가 발생하지 않는다.', (input) => {
    expect(() => Validator.checkIsNotPositive(input)).not.toThrow(ERROR.isNotPositive);
  });

  test.each([[[1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 6, 7]], [[]]])(
    `입력값의 길이가 ${LOTTO_NUMBER.count}이 아니면 예외가 발생한다.`,
    (input) => {
      expect(() => Validator.checkIsInvalidCount(input)).toThrow(ERROR.isInvalidCount);
    },
  );

  test.each([[[1, 2, 3, 4, 5, 6]], [[10, 20, 30, 40, 50, 60]]])(
    `입력값의 길이가 ${LOTTO_NUMBER.count}이면 예외가 발생하지 않는다.`,
    (input) => {
      expect(() => Validator.checkIsInvalidCount(input)).not.toThrow(ERROR.isInvalidCount);
    },
  );

  test.each([[[1, 2, 3, 4, 5, 'hi!']], [[1, 2, 3, 4, 5, '']]])(
    '입력값에 숫자가 아닌 요소가 있다면 예외가 발생한다.',
    (input) => {
      expect(() => Validator.checkHasNonNumericElements(input)).toThrow(
        ERROR.hasNonNumericElements,
      );
    },
  );

  test.each([[[1, 2, 3, 4, 5, 77]], [[1, 2222, 39, -4, 500, 12000]]])(
    '입력값이 모두 숫자로만 이루어져 있다면 예외가 발생하지 않는다.',
    (input) => {
      expect(() => Validator.checkHasNonNumericElements(input)).not.toThrow(
        ERROR.hasNonNumericElements,
      );
    },
  );

  test.each([[0], [46], [100000]])(
    `입력값이 ${LOTTO_NUMBER.minNum}-${LOTTO_NUMBER.maxNum} 사이의 숫자가 아니면 예외가 발생한다.`,
    (input) => {
      expect(() => Validator.checkIsOutOfRange(input)).toThrow(ERROR.isOutOfRange);
    },
  );

  test.each([[1], [22], [45]])(
    `입력값이 ${LOTTO_NUMBER.minNum}-${LOTTO_NUMBER.maxNum} 사이의 숫자면 예외가 발생하지 않는다.`,
    (input) => {
      expect(() => Validator.checkIsOutOfRange(input)).not.toThrow(ERROR.isOutOfRange);
    },
  );

  test.each([[[0, 1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 46]], [[-1, -2, -3, -4, -5, -6]]])(
    `입력값에 ${LOTTO_NUMBER.minNum}-${LOTTO_NUMBER.maxNum} 사이의 숫자가 아닌 요소가 있다면 예외가 발생한다.`,
    (input) => {
      expect(() => Validator.checkHasOutOfRange(input)).toThrow(ERROR.hasOutOfRange);
    },
  );

  test.each([[[1, 2, 3, 4, 5, 6]], [[24, 22, 34, 15, 7, 44]], [[1, 1, 1, 1, 1, 1]]])(
    `입력값이 모두 ${LOTTO_NUMBER.minNum}-${LOTTO_NUMBER.maxNum} 사이의 숫자로만 이루어져 있다면 예외가 발생하지 않는다.`,
    (input) => {
      expect(() => Validator.checkHasOutOfRange(input)).not.toThrow(ERROR.hasOutOfRange);
    },
  );

  test.each([[[1, 2, 3, 4, 5, 5]], [[11, 11, 11, 11, 11, 11]]])(
    '입력값에 중복되는 수가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => Validator.checkHasDuplicate(input)).toThrow(ERROR.hasDuplicate);
    },
  );

  test.each([[[-1, 2, -3, 4, -5, 6]], [[11, 111, 1111, 11111, 111111]]])(
    '입력값에 중복되는 수가 없으면 예외가 발생하지 않는다.',
    (input) => {
      expect(() => Validator.checkHasDuplicate(input)).not.toThrow(ERROR.hasDuplicate);
    },
  );
});
