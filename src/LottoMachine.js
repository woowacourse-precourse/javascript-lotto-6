import Lotto from './Lotto';
import Money from './Money';

class LottoMachine {
  #lottos;
  #money;

  constructor(lottos = [], money = null) {
    this.#lottos = lottos;
    this.#money = money;
  }

  insertMoney(money) {
    this.#money = new Money(money);
  }

  issueLottos() {
    const purchaseCount = this.#money.getPurchaseCount();

    for (let i = 0; i < purchaseCount; i++) {
      const lottoNumbers = Lotto.generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }
}

export default LottoMachine;
