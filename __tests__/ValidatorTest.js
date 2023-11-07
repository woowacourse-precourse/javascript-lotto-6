import { ERROR_MESSAGE } from '../src/constants/constants.js';

describe('Validator', () => {
  test('구입금액이 숫자인지 확인한다.', () => {
    const purchaseMoney = 'a';

    expect(() => {
      if (!/^\d+$/.test(purchaseMoney)) {
        throw new Error(ERROR_MESSAGE.number);
      }
    }).toThrow();
  });

  test('구입금액이 1000원 단위인지 확인한다.', () => {
    const purchaseMoney = [0, 1500, 500, 1200];

    purchaseMoney.forEach(money => {
      expect(() => {
        if (Boolean(money % 1000) || money === 0) {
          throw new Error(ERROR_MESSAGE.unit);
        }
      }).toThrow();
    });
  });

  test('당첨 번호가 쉼표로 구분되는지, 숫자인지 확인한다.', () => {
    const winningNumber = ['1234', 'a'];

    winningNumber.forEach(number => {
      expect(() => {
        if (!/^[0-9]+(,[0-9]+)+$/.test(number)) {
          throw new Error(ERROR_MESSAGE.form);
        }
      }).toThrow();
    });
  });

  test('로또 번호의 생성 범위를 확인한다.', () => {
    const numbers = [0, 2, 3, 4, 5, 6];

    expect(() => {
      numbers.forEach(num => {
        if (num < 1 || num > 45) {
          throw new Error(ERROR_MESSAGE.range);
        }
      });
    }).toThrow();
  });

  test('당첨 번호에 중복된 숫자가 있는지 확인한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 5];

    expect(() => {
      if (new Set(numbers).size !== numbers.length) {
        throw new Error(ERROR_MESSAGE.duplicates);
      }
    }).toThrow();
  });

  test('보너스 번호가 당첨 번호와 중복되는지 확인한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonus = 6;

    expect(() => {
      if (numbers.includes(bonus)) {
        throw new Error(ERROR_MESSAGE.bonus);
      }
    }).toThrow();
  });
});
