import OPTION from '../constants/option.js';
import Account from '../models/Account.js';
import Lotto from '../Lotto.js';
import getRandomLottoNumbers from '../utils/random.js';
import sortAsendingNumber from '../utils/sort.js';

class LottoService {
  #account;

  constructor() {
    this.#account = new Account();
  }

  setPurchaseAmount(purchaseAmount) {
    this.#account.setPurchaseAmount(purchaseAmount);
  }

  buyLottos() {
    const lottoCount = this.getPurchaseAmount() / OPTION.amountUnit;
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = sortAsendingNumber(getRandomLottoNumbers());
      this.#account.addLotto(new Lotto(lottoNumbers));
    }
  }

  getPurchaseAmount() {
    return this.#account.getPurchaseAmount();
  }

  getLottos() {
    return this.#account.getLottos().map((lotto) => lotto.getNumbers());
  }
}

export default LottoService;
