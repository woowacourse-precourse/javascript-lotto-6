import LottoValidator from '../src/domain/LottoValidator.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';

describe('로또번호 각 유효성 검증 테스트', () => {
  let lottoValidator;

  beforeEach(() => {
    lottoValidator = new LottoValidator();
  });

  test('구입금액이 숫자가 아닌 값이면 예외가 발생한다.', () => {
    const invalidAmount = 'abc';
    expect(() => lottoValidator.validatePurchaseAmount(invalidAmount)).toThrow(
      ERROR_MESSAGE.invalidNumberic
    );
  });

  test('구입금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    const invalidAmount = 2500;
    expect(() => lottoValidator.validatePurchaseAmount(invalidAmount)).toThrow(
      ERROR_MESSAGE.invalidAmount
    );
  });

  test('구입금액이 음수일 경우 예외가 발생한다.', () => {
    const negativeAmount = -5000;
    expect(() => lottoValidator.validatePurchaseAmount(negativeAmount)).toThrow(
      ERROR_MESSAGE.invalidNumberic
    );
  });

  test.each([
    [[1, 2, 3, 4, 5], ERROR_MESSAGE.invalidLength],
    [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGE.invalidLength],
  ])('길이가 6이 아닌 경우 예외가 발생한다.', (numbers, expectedError) => {
    expect(() => lottoValidator.validateLottoNumber(numbers)).toThrow(expectedError);
  });

  test.each([
    [[1, 2, 3, 4, 5, 'A'], ERROR_MESSAGE.invalidNumberic],
    [[1, 2, 3, 4, 5, ''], ERROR_MESSAGE.invalidNumberic],
    [[1, 2, 3, 4, undefined, 6], ERROR_MESSAGE.invalidNumberic],
  ])('숫자가 아닌 값이 포함되면 예외가 발생한다.', (numbers, expectedError) => {
    expect(() => lottoValidator.validateLottoNumber(numbers)).toThrow(expectedError);
  });

  test.each([
    [[1, 2, 3, 4, 5, 46], ERROR_MESSAGE.invalidRange],
    [[0, 1, 2, 3, 4, 5], ERROR_MESSAGE.invalidRange],
  ])('숫자가 범위 1~45를 벗어나면 예외가 발생한다.', (numbers, expectedError) => {
    expect(() => lottoValidator.validateLottoNumber(numbers)).toThrow(expectedError);
  });

  test('중복된 숫자가 포함되면 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 5];
    const expectedError = ERROR_MESSAGE.invalidUnique;
    expect(() => lottoValidator.validateLottoNumber(numbers)).toThrow(expectedError);
  });

  test('보너스 번호가 범위 1~45를 벗어나면 예외가 발생한다.', () => {
    expect(() => lottoValidator.validateBonusNumber(0, false)).toThrow(ERROR_MESSAGE.invalidRange);
  });

  test('보너스 번호가 하나의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => lottoValidator.validateBonusNumber('abc', false)).toThrow(
      ERROR_MESSAGE.invalidBonusNumber
    );
  });

  test('보너스 번호가 당첨번호에 포함되어 있는지의 여부에 따라 예외가 발생한다.', () => {
    expect(() => lottoValidator.validateBonusNumber(42, true)).toThrow(
      ERROR_MESSAGE.invalidUniqueBonusNumber
    );
  });
});
