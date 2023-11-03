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
});
