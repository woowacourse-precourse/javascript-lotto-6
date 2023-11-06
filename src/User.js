import Lotto from './Lotto';
import { printPurchasedLottos, readPayment } from './utils';

class User {
  async pay() {
    const money = await readPayment();
    return money;
  }
  /**
   *
   * @param {Lotto[]} lottos
   */
  getLottos(lottos) {
    printPurchasedLottos(lottos);
  }
}

export default User;
