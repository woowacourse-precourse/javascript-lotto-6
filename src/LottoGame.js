import Input from './Input.js';
import Output from './Output.js';
import Buyer from './Buyer.js';
import Util from './Util.js';
import WinLotto from './WinLotto.js';

class LottoGame {
  #buyer;
  #winLotto;

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
    const parsedWinLotto = Util.splitStringToNumberArray(winLotto);

    this.#winLotto = new WinLotto(parsedWinLotto).getLotto();
  }

  printPurchaseInfo() {
    Output.printPurchaseCount(this.#buyer.getPurchaseCount());
    Output.printPurchasedLottoList(this.#buyer.getLottoList());
  }
}

export default LottoGame;
