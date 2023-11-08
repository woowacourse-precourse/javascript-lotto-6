import Price from '../src/model/Price.js';
import { ERROR } from '../src/util/constant.js';

describe('로또 금액 유효성 테스트', () => {
  test('로또 금액을 입력하지 않은 경우 예외 발생', () => {
    const moneyInput = ['', ' ', '     '];

    moneyInput.forEach(money => {
      expect(() => {
        new Price(money);
      }).toThrow(ERROR.emptyValue);
    });
  });

  test('숫자가 아닌 문자를 입력한 경우(실수, 음수 포함)', () => {
    const moneyInput = ['1000abc', '1 000', '1000.0', '-1000'];

    moneyInput.forEach(money => {
      expect(() => {
        new Price(money);
      }).toThrow(ERROR.notNumberic);
    });
  });

  test('1000원 단위가 아닌 경우', () => {
    const moneyInput = ['1005', '8765', '1233'];

    moneyInput.forEach(money => {
      expect(() => {
        new Price(money);
      }).toThrow(ERROR.notDivisibleMoney);
    });
  });

  test('1000원 미만을 입력할 경우', () => {
    const moneyInput = '0';

    expect(() => {
      new Price(moneyInput);
    }).toThrow(ERROR.underThousandMoney);
  });
});
