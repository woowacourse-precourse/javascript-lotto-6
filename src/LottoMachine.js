import Lotto from './Lotto';
import Money from './Money';
import Validator from './utils/vaildators';
import { CONSTANT } from './constants';

class LottoMachine {
  #lottos;
  #money;

  constructor(lottos = [], money = null) {
    this.#lottos = lottos;
    this.#money = money;
  }

  getPurchaseCount() {
    const purchaseCount = this.#money.getPurchaseCount();
    return purchaseCount;
  }

  getLotto(index) {
    const lottoLength = this.#lottos.length;
    Validator.isInvaildIndex(CONSTANT.ZERO, lottoLength.index, index);
    const lotto = this.#lottos[index].getLotto();
    return lotto;
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
