export default class MyWallet {
  #purchaseAmount;

  setPurchaseAmount(input) {
    this.#purchaseAmount = Number(input);
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}
