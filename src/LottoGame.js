import Input from './Input.js';
import Output from './Output.js';
import Buyer from './Buyer.js';

class LottoGame {
  #buyer;

  #lottos;

  async start() {
    await this.setBuyer();
    this.printPurchaseInfo();
    await this.setWinLotto();
  }

  async setBuyer() {
    const lottoBudget = await Input.getLottoBudget();
    this.#buyer = new Buyer(lottoBudget);
  }

  async setWinLotto() {
    const winLotto = await Input.getWinLotto();
  }

  printPurchaseInfo() {
    Output.printPurchaseCount(this.#buyer.getPurchaseCount());
    Output.printPurchasedLottoList(this.#buyer.getLottoList());
  }
}

export default LottoGame;
