/* eslint-disable */

import shop from '../../src/domain/shop';

describe('shop 테스트', () => {
  test('판매 테스트', () => {
    const money = 3000;
    shop.lotterySales(money);
  });
});
