export default class MyWallet {
  #purchaseAmount;

  #returnMoney;

  #returnRate;

  setPurchaseAmount(input) {
    this.#purchaseAmount = Number(input);
  }

  setReturnMoney(input) {
    this.#returnMoney = input;
    return this.setReturnRate();
  }

  setReturnRate() {
    this.#returnRate = this.#returnMoney / this.#purchaseAmount;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getReturnRate() {
    return this.#returnRate;
  }
}
