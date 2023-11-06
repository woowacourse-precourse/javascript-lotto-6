import LottoValidator from '../src/domain/LottoValidator.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';

describe('로또번호 각 유효성 검증 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5], ERROR_MESSAGE.invalidLength],
    [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGE.invalidLength],
  ])('길이가 6이 아닌 경우 예외가 발생한다.', (numbers, expectedError) => {
    expect(() => LottoValidator.validLottoNumber(numbers)).toThrow(expectedError);
  });

  test.each([
    [[1, 2, 3, 4, 5, 'A'], ERROR_MESSAGE.invalidNumberic],
    [[1, 2, 3, 4, 5, ''], ERROR_MESSAGE.invalidNumberic],
    [[1, 2, 3, 4, undefined, 6], ERROR_MESSAGE.invalidNumberic],
  ])('숫자가 아닌 값이 포함되면 예외가 발생한다.', (numbers, expectedError) => {
    expect(() => LottoValidator.validLottoNumber(numbers)).toThrow(expectedError);
  });

  test.each([
    [[1, 2, 3, 4, 5, 46], ERROR_MESSAGE.invalidRange],
    [[0, 1, 2, 3, 4, 5], ERROR_MESSAGE.invalidRange],
  ])('숫자가 범위 1~45를 벗어나면 예외가 발생한다.', (numbers, expectedError) => {
    expect(() => LottoValidator.validLottoNumber(numbers)).toThrow(expectedError);
  });

  test('중복된 숫자가 포함되면 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 5];
    const expectedError = ERROR_MESSAGE.invalidUnique;
    expect(() => LottoValidator.validLottoNumber(numbers)).toThrow(expectedError);
  });

  test('보너스 번호가 범위 1~45를 벗어나면 예외가 발생한다.', () => {
    expect(() => LottoValidator.validBonusNumber(0, false)).toThrow(ERROR_MESSAGE.invalidRange);
  });

  test('보너스 번호가 하나의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => LottoValidator.validBonusNumber('abc', false)).toThrow(
      ERROR_MESSAGE.invalidBonusNumber
    );
  });

  test('보너스 번호가 당첨번호에 포함되어 있는지의 여부에 따라 예외가 발생한다.', () => {
    expect(() => LottoValidator.validBonusNumber(42, true)).toThrow(
      ERROR_MESSAGE.invalidUniqueBonusNumber
    );
  });

  test('숫자가 아닌 값이 주어지면 예외가 발생한다.', () => {
    const invalidAmount = 'abc';
    expect(() => LottoValidator.validPurchaseAmount(invalidAmount)).toThrow(
      ERROR_MESSAGE.invalidNumberic
    );
  });

  test('금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    const invalidAmount = 2500;
    expect(() => LottoValidator.validPurchaseAmount(invalidAmount)).toThrow(
      ERROR_MESSAGE.invalidAmount
    );
  });

  test('금액이 음수일 경우 예외가 발생한다.', () => {
    const negativeAmount = -5000;
    expect(() => LottoValidator.validPurchaseAmount(negativeAmount)).toThrow(
      ERROR_MESSAGE.invalidNumberic
    );
  });
});
