import Validator from '../src/utils/Validator';
import ERROR from '../src/constants/error';

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
});
