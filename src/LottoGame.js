import Input from './Input.js';
import Output from './Output.js';
import Buyer from './Buyer.js';

class LottoGame {
  #buyer;

  #lottos;

  async start() {
    await this.setBuyer();
    this.printPurchasedLottoList();
  }

  async setBuyer() {
    const lottoBudget = await Input.getLottoBudget();
    this.#buyer = new Buyer(lottoBudget);
    Output.printPurchaseCount(this.#buyer.getPurchaseCount());
  }
}

export default LottoGame;
