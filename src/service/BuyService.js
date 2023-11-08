import Buy from '../buy/Buy.js';

export default class BuyService {
  #buy;

  buyLotto(balance) {
    this.#buy = new Buy(balance);
  }

  getAmount() {
    return this.#buy.amount();
  }

  getLottos() {
    return this.#buy.lottos();
  }
}