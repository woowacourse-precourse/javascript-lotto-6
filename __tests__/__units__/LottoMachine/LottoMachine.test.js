import { LottoMachine } from '../../../src/domain/index.js';

describe('LottoMachine 테스트', () => {
  /**
   * @type {LottoMachine}
   */
  let lottoMachine;

  beforeEach(() => {
    // given
    lottoMachine = LottoMachine.of();
  });

  it.each([
    { money: 1_000, sheets: 1 },
    { money: 2_000, sheets: 2 },
    { money: 10_000, sheets: 10 },
    { money: 100_000, sheets: 100 },
  ])(
    `buy(money) 호출 시 ${LottoMachine.LOTTO_PRICE}에 비례해 Lotto를 반환한다. (구매액: $money원, 수: $sheets장)`,
    ({ money, sheets }) => {
      // when
      const lottos = lottoMachine.buy(money);

      // then
      expect(lottos).toHaveLength(sheets);
    },
  );
});
