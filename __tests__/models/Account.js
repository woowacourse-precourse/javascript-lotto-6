import OPTION from '../../src/constants/option';
import Account from '../../src/models/Account';

describe('구입 금액 테스트', () => {
  test('구입 금액이 정수가 아니거나 음수이면 예외를 발생시킨다', () => {
    const inputs = ['abc', -1000];

    inputs.forEach((input) =>
      expect(() => new Account(input)).toThrow('[ERROR]'),
    );
  });

  test(`구입 금액이 0이거나 ${OPTION.amountUnit}으로 나누어 떨어지지 않으면 예외를 발생시킨다`, () => {
    const inputs = [0, 1500];

    inputs.forEach((input) =>
      expect(() => new Account(input)).toThrow('[ERROR]'),
    );
  });
});
