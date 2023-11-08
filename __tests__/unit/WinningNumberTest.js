/* eslint-disable max-lines-per-function */
import { ERROR } from '../../src/common/constants.js';
import WinningNumberValidator from '../../src/service/WinningNumberValidator.js';

describe('당첨 번호 테스트', () => {
  test('당첨 번호가 유효하다면 성공', () => {
    const validInput = '1,2,3,4,5,6';
    const validator = new WinningNumberValidator(validInput);
    expect(() => validator.validate()).not.toThrow();
  });

  test('6개의 당첨 번호가 쉼표로 구분되어 있지 않다면 실패', () => {
    const invalidInput = '123456';
    const validator = new WinningNumberValidator(invalidInput);
    expect(() => validator.validate()).toThrow(ERROR.winning_format);
  });

  test('당첨 번호 중 중복된 숫자가 있다면 실패', () => {
    const invalidInput = '1,2,3,4,5,5';
    const validator = new WinningNumberValidator(invalidInput);
    expect(() => validator.validate()).toThrow(ERROR.winning_duplicate);
  });
});
