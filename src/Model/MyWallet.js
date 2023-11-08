export default class MyWallet {
  #purchaseAmount;

  #returnMoney;

  #returnRate;

  setPurchaseAmount(input) {
    this.#purchaseAmount = Number(input);
  }

  setReturnMoney(input) {
    this.#returnMoney = input;
  }

  setReturnRate() {
    this.#returnRate = this.#purchaseAmount / this.#returnMoney;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getReturnRate() {
    return this.#returnRate;
  }
}
