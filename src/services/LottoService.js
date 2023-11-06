import Account from '../models/Account.js';

class LottoService {
  #account;

  setPurchaseAmount(purchaseAmount) {
    this.#account = new Account(purchaseAmount);
  }
}

export default LottoService;
