import Input from './Input.js';
import Output from './Output.js';
import Buyer from './Buyer.js';
import Util from './Util.js';
import WinLotto from './WinLotto.js';

class LottoGame {
  #buyer;
  #winLotto;
  #bonusLotto;

  async start() {
    await this.setBuyer();
    this.printPurchaseInfo();
    await this.setWinLotto();
    await this.setBonusLotto();
  }

  async setBuyer() {
    const lottoBudget = await Input.getLottoBudget();
    this.#buyer = new Buyer(lottoBudget);
  }

  async setWinLotto() {
    const winLotto = await Input.getWinLotto();
    const parsedWinLotto = Util.splitStringToNumberArray(winLotto);

    this.#winLotto = new WinLotto(parsedWinLotto);
  }

  async setBonusLotto() {
    const bonusLotto = await Input.getBonusLotto();
    this.#winLotto.setBonusLotto(Number(bonusLotto));
    this.#bonusLotto = this.#winLotto.getBonusLotto();
  }

  printPurchaseInfo() {
    Output.printPurchaseCount(this.#buyer.getPurchaseCount());
    Output.printPurchasedLottoList(this.#buyer.getLottoList());
  }
}

export default LottoGame;
