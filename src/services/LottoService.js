import OPTION from '../constants/option.js';
import Account from '../models/Account.js';
import Lotto from '../Lotto.js';
import getRandomLottoNumbers from '../utils/random.js';

class LottoService {
  #account;

  constructor() {
    this.#account = new Account();
  }

  setPurchaseAmount(purchaseAmount) {
    this.#account.setPurchaseAmount(purchaseAmount);
  }

  buyLottos() {
    const lottoCount = this.#account.getPurchaseAmount() / OPTION.amountUnit;
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = getRandomLottoNumbers();
      this.#account.addLotto(new Lotto(lottoNumbers));
    }
  }

  getAccount() {
    return this.#account;
  }

  getLottos() {
    return this.#account.getLottos();
  }
}

export default LottoService;
