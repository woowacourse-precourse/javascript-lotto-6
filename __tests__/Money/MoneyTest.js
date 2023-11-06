import Money from '../../src/domains/Money.js';
import MoneyError from '../../src/errors/MoneyError.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';

describe('구입 금액 클래스 테스트', () => {
  test('구입 금액이 1000원 보다 작을때 예외가 발생한다.', () => {
    expect(() => {
      new Money('800');
    }).toThrow(new MoneyError(ERROR_MESSAGES.lack_money));
  });

  test('구입 금액에 공백이 포함 된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Money('1000 23');
    }).toThrow(new MoneyError(ERROR_MESSAGES.money_not_a_number));
  });

  test('입력 받은 금액이 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Money('  ');
    }).toThrow(new MoneyError(ERROR_MESSAGES.lack_money));
  });

  test('천원 단위로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      new Money('1234');
    }).toThrow(new MoneyError(ERROR_MESSAGES.not_divded));
  });
});
