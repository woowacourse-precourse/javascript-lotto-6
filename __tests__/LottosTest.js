import Lottos from '../src/Lottos';

describe('Lottos 클래스 테스트', () => {
  test.each([['2000f'], ['3000n'], ['abc']])(
    '구입 금액이 숫자가 아니면 예외가 발생한다. 구입 금액: %s',
    purchaseAmount => {
      expect(() => {
        new Lottos(purchaseAmount);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['292'], ['33'], ['0']])(
    '구입 금액이 1000보다 작으면 예외가 발생한다. 구입 금액: %s',
    purchaseAmount => {
      expect(() => {
        new Lottos(purchaseAmount);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['3444'], ['1424'], ['3']])(
    '구입 금액이 1000단위가 아니면 예외가 발생한다. 구입 금액: %s',
    purchaseAmount => {
      expect(() => {
        new Lottos(purchaseAmount);
      }).toThrow('[ERROR]');
    },
  );

  test.each([
    ['1000', 1],
    ['2000', 2],
    ['3000', 3],
  ])(
    'count 작동 테스트, 구입 금액: %s, 로또 티켓 개수: %d',
    (purchaseAmount, count) => {
      const lottos = new Lottos(purchaseAmount);
      expect(lottos.count).toEqual(count);
    },
  );
});
