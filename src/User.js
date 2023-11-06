import Lotto from './Lotto';
import { printPurchasedLottos, readPayment } from './utils';

class User {
  #paymentAmount = 0;
  #lottos;

  async pay() {
    const money = await readPayment();
    this.#paymentAmount = money;
    return money;
  }
  /**
   *
   * @param {Lotto[]} lottos
   */
  getLottos(lottos) {
    this.#lottos = lottos;
    printPurchasedLottos(lottos);
  }

  getReceipt() {
    return {
      paymentAmount: this.#paymentAmount,
      lottos: this.#lottos,
    };
  }
}

export default User;
