import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Buyer from '../model/Buyer.js';
import Util from '../utils/Util.js';
import WinLotto from '../model/WinLotto.js';

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
