import { LottoMachine } from '../domain/index.js';

const LottoPurchaseService = Object.freeze({
  lottoMachine: LottoMachine.of(),

  /**
   * 로또를 생성하고 구매합니다.
   * @param {number} money
   * @returns {Lotto[]}
   */
  buyLottos(money) {
    return this.lottoMachine.buy(money);
  },
});

export default LottoPurchaseService;
