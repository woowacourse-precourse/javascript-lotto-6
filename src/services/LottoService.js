import OPTION from '../constants/option.js';
import Account from '../models/Account.js';
import Lotto from '../Lotto.js';
import getRandomLottoNumbers from '../utils/random.js';
import sortAscendingNumber from '../utils/sort.js';

class LottoService {
  #account;

  #winningLotto;

  constructor() {
    this.#account = new Account();
  }

  setPurchaseAmount(purchaseAmount) {
    this.#account.setPurchaseAmount(purchaseAmount);
  }

  setWinningNumbers(winningNumbers) {
    const lottoNumbers = sortAscendingNumber(winningNumbers);
    this.#winningLotto = new Lotto(lottoNumbers);
  }

  buyLottos() {
    const lottoCount = this.getPurchaseAmount() / OPTION.amountUnit;
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = sortAscendingNumber(getRandomLottoNumbers());
      this.#account.addLotto(new Lotto(lottoNumbers));
    }
  }

  getPurchaseAmount() {
    return this.#account.getPurchaseAmount();
  }

  getLottos() {
    return this.#account.getLottos().map((lotto) => lotto.getNumbers());
  }

  getWinningNumbers() {
    if (!this.#winningLotto) return undefined;

    return this.#winningLotto.getNumbers();
  }
}

export default LottoService;
