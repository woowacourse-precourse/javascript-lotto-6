/* eslint-disable max-lines-per-function */
import BonusNumberValidator from '../../src/service/BonusNumberValidator.js';
import { ERROR } from '../../src/common/constants.js';

describe('보너스 번호 테스트', () => {
  test('보너스 번호가 유효하면 성공', () => {
    const validInput = '7';
    const validator = new BonusNumberValidator(validInput);
    expect(validator.validate()).toBe(validInput);
  });

  test('보너스 번호가 공백이라면 실패', () => {
    const emptyInput = '';
    const validator = new BonusNumberValidator(emptyInput);
    expect(() => validator.validate()).toThrow(ERROR.empty);
  });

  test('보너스 번호가 숫자가 아닐 경우 실패', () => {
    const nonNumericInput = 'abc';
    const validator = new BonusNumberValidator(nonNumericInput);
    expect(() => validator.validate()).toThrow(ERROR.numeric);
  });

  test('보너스 번호가 1이상 45 이하가 아닐 경우 실패', () => {
    const outOfRangeInput = '50';
    const validator = new BonusNumberValidator(outOfRangeInput);
    expect(() => validator.validate()).toThrow(ERROR.range);
  });

  test('보너스 번호가 당첨 번호와 중복된 경우 실패', () => {
    const duplicateInput = '6';
    const winningNumbers = ['3', '6', '9'];
    const validator = new BonusNumberValidator(duplicateInput);
    expect(() => validator.validateUnique(winningNumbers)).toThrow(ERROR.bonus_duplicate);
  });
});
