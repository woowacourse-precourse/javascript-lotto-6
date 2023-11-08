import Lotto from './Lotto';
import Money from './Money';
import Validator from './utils/vaildators';
import { CONSTANT } from './constants';
import WinningNumber from './WinningNumber';

class LottoMachine {
  #lottos;
  #money;
  #winningNumber;

  constructor(lottos = [], money = null) {
    this.#lottos = lottos;
    this.#money = money;
    this.#winningNumber = new WinningNumber();
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

  setMoney(money) {
    this.#money = new Money(money);
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumber.setWinningNumbers(winningNumbers);
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
