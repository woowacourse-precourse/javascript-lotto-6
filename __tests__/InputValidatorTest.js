import Validator from '../src/utils/Validator.js';
import ERROR from '../src/constants/error.js';

describe('입력 예외 상황 테스트', () => {
  test('구입 금액이 1,000으로 나누어 떨어지지 않는 경우', () => {
    const received = 17500;
    expect(() => {
      Validator.remainderNotZero(received);
    }).toThrow(ERROR.message.remainderNotZero);
  });
  test('구입 금액이 숫자가 아닌 값을 입력한 경우', () => {
    const received = 'abc';
    expect(() => {
      Validator.invalidNumber(received);
    }).toThrow(ERROR.message.invalidNumber);
  });
  test('값을 입력하지 않았을 경우', () => {
    const received = '';
    expect(() => {
      Validator.missingValue(received);
    }).toThrow(ERROR.message.missingValue);
  });
  test('음수값을 입력했을 경우', () => {
    const received = -15000;
    expect(() => {
      Validator.negativeNumber(received);
    }).toThrow(ERROR.message.negativeNumber);
  });
  test('쉼표 구분을 잘못 기입했을 경우', () => {
    const received = ',1,2,3,4,5';
    expect(() => {
      Validator.invalidSeparator(received);
    }).toThrow(ERROR.message.invalidSeparator);
  });
  test('당첨 번호가 6개가 아닌 경우', () => {
    const received = '1,2,3,4,5';
    expect(() => {
      Validator.invalidNumbersCount(received);
    }).toThrow(ERROR.message.invalidNumbersCount);
  });
  test('당첨 번호에 숫자가 아닌 값을 입력한 경우', () => {
    const received = ['1', 'a', '2', '3', '4', '5'];
    expect(() => {
      Validator.invalidWinningNumbers(received);
    }).toThrow(ERROR.message.invalidNumber);
  });
  test('당첨 번호가 1~45의 값이 아닌 경우', () => {
    const received = ['0', '2', '3', '4', '5', '46'];
    expect(() => {
      Validator.invalidRange(received);
    }).toThrow(ERROR.message.invalidRange);
  });
  test('입력한 값이 1~45의 값이 아닌 경우', () => {
    const received = '0';
    expect(() => {
      Validator.invalidNumberRange(received);
    }).toThrow(ERROR.message.invalidRange);
  });
});
