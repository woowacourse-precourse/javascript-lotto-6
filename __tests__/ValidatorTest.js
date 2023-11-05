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
});
