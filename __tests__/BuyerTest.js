/* eslint-disable max-lines-per-function */

import Buyer from '../src/domain/Buyer';
import { LOTTO } from '../src/Constant';

describe('Buyer 도메인 로직 테스트', () => {
  test.each([-1000, 0.1, 8.11, 999, 0, 99999])(
    `로또 구매 금액은 ${LOTTO.MONEY_LIMIT} 이하의 양의 정수여야 한다.`,
    (money) => {
      expect(() => new Buyer(money)).toThrow('[ERROR]');
    }
  );

  test.each([10, 1100, 900])(
    `로또 구매 금액은 ${LOTTO.MONEY_UNIT} 단위로 나누어 떨어져야 한다.`,
    (money) => {
      expect(() => new Buyer(money)).toThrow('[ERROR]');
    }
  );

  test('구매자는 구입 금액 / 단위금액 만큼 로또를 발행받는다.', () => {
    const money = 10000;

    const buyer = new Buyer(money);
    buyer.buyLottos();
    expect(buyer.getLottos().length).toBe(money / LOTTO.MONEY_UNIT);
  });
});
