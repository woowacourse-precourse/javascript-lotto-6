import { Lotto, LottoMachine } from '../domain/index.js';

const LottoPurchaseService = Object.freeze({
  lottoMachine: LottoMachine.of(),

  /**
   * 로또를 생성하고 구매합니다.
   * @param {number} money 구매할 금액입니다.
   * @returns {Lotto[]} 구매한 로또 배열입니다.
   */
  buyLottos(money) {
    return this.lottoMachine.buy(money);
  },
});

export default LottoPurchaseService;
