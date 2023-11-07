/* eslint-disable max-lines-per-function */
import { ERROR } from '../../src/common/constants.js';
import LottoValidator from '../../src/service/LottoValidator.js';

describe('로또 번호 테스트', () => {
  test('로또가 유효한 형식이라면 성공', () => {
    const validInput = [1, 2, 3, 4, 5, 6];
    const lottoValidator = new LottoValidator(validInput);
    expect(() => lottoValidator.validate()).not.toThrow();
  });

  test('로또가 배열 형태가 아니면 실패', () => {
    const invalidInput = '1, 2, 3, 4, 5, 6';
    const lottoValidator = new LottoValidator(invalidInput);
    expect(() => lottoValidator.validate()).toThrow(ERROR.not_lotto);
  });

  test('로또에 문자열이 포함되면 실패', () => {
    const invalidInput = [1, 2, 3, '문자', 5, 6];
    const lottoValidator = new LottoValidator(invalidInput);
    expect(() => lottoValidator.validate()).toThrow(ERROR.numeric);
  });

  test('로또의 번호가 1 이상 45 이하가 아니면 실패', () => {
    const invalidInput = [1, 2, 3, 4, 5, 46];
    const lottoValidator = new LottoValidator(invalidInput);
    expect(() => lottoValidator.validate()).toThrow(ERROR.range);
  });

  test('로또의 번호가 중복되었다면 실패', () => {
    const invalidInput = [1, 2, 3, 4, 5, 5];
    const lottoValidator = new LottoValidator(invalidInput);
    expect(() => lottoValidator.validate()).toThrow(ERROR.lotto_duplicate);
  });

  test('로또 번호가 6개가 아니라면 실패', () => {
    const validInput = [1, 2, 3, 4, 5, 6, 7];
    const lottoValidator = new LottoValidator(validInput);
    expect(() => lottoValidator.validate()).toThrow(ERROR.lotto_length);
  });
});
