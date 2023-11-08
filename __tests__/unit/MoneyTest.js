/* eslint-disable max-lines-per-function */
import { ERROR } from '../../src/common/constants.js';
import MoneyValidator from '../../src/service/MoneyValidator.js';

describe('구매 금액 테스트', () => {
  test('금액이 유효한 형식이라면 성공', () => {
    const validInput = '10000';
    const moneyValidator = new MoneyValidator(validInput);
    expect(() => moneyValidator.validate()).not.toThrow();
  });

  test('금액이 1000 단위가 아니라면 실패', () => {
    const invalidInput = '1010';
    const moneyValidator = new MoneyValidator(invalidInput);
    expect(() => moneyValidator.validate()).toThrow(ERROR.money);
  });

  test('금액이 문자열이라면 실패', () => {
    const invalidInput = 'abc';
    const moneyValidator = new MoneyValidator(invalidInput);
    expect(() => moneyValidator.validate()).toThrow(ERROR.numeric);
  });

  test('금액이 공백이라면 실패', () => {
    const invalidInput = ' ';
    const moneyValidator = new MoneyValidator(invalidInput);
    expect(() => moneyValidator.validate()).toThrow(ERROR.numeric);
  });
});
