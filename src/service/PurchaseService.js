import Purchase from '../purchase/Purchase.js';

export default class PurchaseService {
  #purchase;

  purchaseLotto(balance) {
    this.#purchase = new Purchase(balance);
  }

  getAmount() {
    return this.#purchase.amount();
  }

  getLottos() {
    return this.#purchase.lottos();
  }

  printLottos() {
    return this.#purchase.print();
  }
}
