import LottoValidation from '../src/validation/LottoValidation.js';
import BonusValidation from '../src/validation/BonusValidation.js';
import MoneyValidation from '../src/validation/MoneyValidation.js';

import ValidationError from '../src/error/ValidationError.js';
import { SELECT_NUMBER_ERROR, BONUS_NUMBER_ERROR, PURCHASE_AMOUNT_ERROR } from '../src/constants/error.js';

describe('입력된 당첨번호의 예외 발생이 정확하게 이루어지는지 확인합니다.', () => {
  // given
  test.each([[[1, 2, 3, 4]], [[1, 2, 3, 4, 5, 6, 7]]])('배열의 길이가 6인지 확인', (input) => {
    // when, then
    const error = new ValidationError(SELECT_NUMBER_ERROR.COUNT);
    expect(() => LottoValidation.checkLength(input)).toThrow(error.message);
  });

  // given
  test.each([[[1, 200, 30, 0]], [[45, 2356, 312, 45, 51, 62, 7]]])('숫자가 1~45 사이의 값인지 확인', (input) => {
    // when, then
    const error = new ValidationError(SELECT_NUMBER_ERROR.NUMBER);
    expect(() => LottoValidation.checkNumber(input)).toThrow(error.message);
  });

  // given
  test.each([[[1, 1, 2]], [[5, 6, 5, 5]]])('중복 숫자 확인', (input) => {
    // when, then
    const error = new ValidationError(SELECT_NUMBER_ERROR.DUPLICATE);
    expect(() => LottoValidation.checkDuplicate(input)).toThrow(error.message);
  });
});

describe('입력된 보너스 번호를 테스트 합니다.', () => {
  // given
  test.each([[[[1, 2, 3, 4, 5, 6], 6]], [[[11, 34, 23, 31, 37, 9], 9]]])(
    '보너스 번호 중복 숫자 확인',
    ([lottos, bonusNnumber]) => {
      // when, then
      const error = new ValidationError(BONUS_NUMBER_ERROR.DUPLICATE);
      expect(() => BonusValidation.checkDuplicatie(bonusNnumber, lottos)).toThrow(error.message);
    },
  );

  // given
  test.each(['123', 'ㅁㅇㄷ', '##', '', 56, 0, 46])('보너스 번호 숫자 확인', (input) => {
    // when, then
    const error = new ValidationError(BONUS_NUMBER_ERROR.NUMBER);
    expect(() => BonusValidation.checkNumber(input)).toThrow(error.message);
  });
});

describe('입력된 금액을 테스트 합니다.', () => {
  // given
  test.each([999, NaN, 0, -1])('입력 금액 1000이하 숫자 혹은 NaN 여부 확인', (input) => {
    // when, then
    const error = new ValidationError(PURCHASE_AMOUNT_ERROR.NUMBER);
    expect(() => MoneyValidation.checkNumber(input)).toThrow(error.message);
  });

  // given
  test.each([1024, 100023, 1234.412, 1234152])('금액이 1000의 배수인지 확인', (input) => {
    // when, then
    const error = new ValidationError(PURCHASE_AMOUNT_ERROR.NUMBER);
    expect(() => MoneyValidation.checkMultiple(input)).toThrow(error.message);
  });
});
