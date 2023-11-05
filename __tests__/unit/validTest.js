import Lotto from '../../src/Lotto.js';
import { LOTTO_ERROR_CODE, PURCHASE_ERROR_CODE } from '../../src/util/error/errorCode.js';
import { checkHasDuplicate } from '../../src/util/validate/checkHasDuplicate.js';
import checkHasNoRemainder from '../../src/util/validate/checkHasNoRemainder.js';
import { checkIsEmpty, checkLottoIsEmptyOrZero } from '../../src/util/validate/checkIsEmpty.js';
import { checkIsNaN, checkLottoIsNaN } from '../../src/util/validate/checkIsNaN.js';
import { checkLottoIsOutOfRange, checkPurchaseIsNotInRange } from '../../src/util/validate/checkIsNotInRange.js';
import { checkLottoIsInteger } from '../../src/util/validate/checkisInteger.js';

describe('[Lotto] 유효성 검사 테스트', () => {
  test('로또 번호에 중복된 숫자가 존재할 경우 에러를 발생시킨다', () => {
    expect(() => {
      new Lotto([1, 1, 1, 1, 1, 1]);
    }).toThrow(`${PURCHASE_ERROR_CODE.isDuplicated}`);
  });

  test('로또 번호에 유효하지 않은 값이 존재할 경우 에러를 발생시킨다.', () => {
    expect(() => {
      new Lotto([1, '2', 'q', 'zx', '-', '*']);
    }).toThrow(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
  });
});

describe('[function] 유효성 검사 테스트 ', () => {
  test('입력값에 중복값이 존재할 경우 에러를 발생 시킨다', () => {
    // given
    const testValue = [1, 2, 2, 3, 4, 5];

    // when
    expect(() => {
      checkHasDuplicate(testValue);
    }).toThrow(`${PURCHASE_ERROR_CODE.isDuplicated}`);
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않는 경우 에러를 발생시킨다', () => {
    // give
    const input = 9999999;

    // when

    // then
    expect(() => {
      checkHasNoRemainder(input);
    }).toThrow(`${PURCHASE_ERROR_CODE.hasRemainder}`);
  });

  test('입력값이 숫자 이외의 값이 경우 에러를 발생시킨다', () => {
    // given
    const firstTestInput = 'a';
    const secondTestInput = ';';

    // then
    expect(() => {
      checkIsNaN(firstTestInput);
    }).toThrow(`${PURCHASE_ERROR_CODE.valueIsNaN}`);

    expect(() => {
      checkIsNaN(secondTestInput);
    }).toThrow(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
  });

  test('입력값이 빈값일 경우 에러를 발생시킨다', () => {
    // given
    const testInputValue = '';

    // then
    expect(() => {
      checkIsEmpty(testInputValue);
    }).toThrow(`${PURCHASE_ERROR_CODE.valueIsEmpty}`);
  });

  test('입력값이 1000 이하일 경우 에러를 발생시킨다', () => {
    // given
    const testInputValue = '0';

    // then
    expect(() => checkPurchaseIsNotInRange(testInputValue)).toThrow(`${PURCHASE_ERROR_CODE.valueIsTooSmall}`);
  });

  test('parsing된 입력값이 0일 경우 에러를 발생', () => {
    // given
    const InValidInput = [0, 1, 2, 3, 4, 5];

    // then
    expect(() => checkLottoIsEmptyOrZero(InValidInput)).toThrow(`${LOTTO_ERROR_CODE.valueIsEmptyOrZero}`);
  });

  test('parsing된 입력값에 소수가 존재할 경우 에러를 발생', () => {
    // given
    const inValidInput = [1.5, 2.9, 3, 4, 5, 6];

    // then
    expect(() => checkLottoIsInteger(inValidInput)).toThrow(`${LOTTO_ERROR_CODE.valueIsNotInteger}`);
  });

  test('parsing된 입력값에 NaN이 존재할 경우 에러를 발생', () => {
    // given
    const inValidInput = ['asdf', 2, '#', '4', 5, 6];

    // then
    expect(() => checkLottoIsNaN(inValidInput)).toThrow(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
  });

  test('parsing된 입력값이 1보다 작거나 45보다 클 경우 에러를 발생', () => {
    // given
    const smallInValidInput = [-1, 2, 3, 4, 5, 6];
    const bigInValidInput = [1, 2, 3, 4, 5, 46];

    // then
    expect(() => checkLottoIsOutOfRange(smallInValidInput)).toThrow(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    expect(() => checkLottoIsOutOfRange(bigInValidInput)).toThrow(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
  });
});
