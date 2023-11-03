import Input from './Input.js';
import Output from './Output.js';
import Buyer from './Buyer.js';

class LottoGame {
  #buyer;

  async start() {
    await this.setBuyer();
    this.#buyer.setLottos();
  }

  async setBuyer() {
    const lottoBudget = await Input.getLottoBudget();
    this.#buyer = new Buyer(lottoBudget);
    Output.printPurchase(this.#buyer.getPurchaseCount());
  }
}

export default LottoGame;
