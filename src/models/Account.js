import InputValidator from '../Validator/InputValidator.js';

class Account {
  #purchaseAmount;

  #lottos;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
  }

  #validate(purchaseAmount) {
    InputValidator.isPurchaseAmountPositiveInteger(purchaseAmount);
    InputValidator.isPurchaseAmountInAmountUnit(purchaseAmount);
  }

  setPurchaseAmount(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Account;
