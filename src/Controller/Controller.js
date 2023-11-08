import inputView from '../view/inputView.js';
import outputView from '../view/outputview.js';
import MyWallet from '../Model/MyWallet.js';
import MyLotto from '../Model/MyLotto.js';
import WinNumber from '../Model/WinNumber.js';

export default class Controller {
  #myWallet;

  #myLotto;

  #winNumber;

  constructor() {
    this.#myWallet = new MyWallet();
    this.#myLotto = new MyLotto();
  }

  async handlePurchaseAmount() {
    const input = await inputView.readPurchaseAmount();
    this.#myWallet.setPurchaseAmount(input);

    return this.handleLottoCount(input);
  }

  handleLottoCount(input) {
    this.#myLotto.setLottoCount(input);
    outputView.printLottoCount(this.#myLotto.getLottoCount());

    return this.handleQuickPicks();
  }

  handleQuickPicks() {
    outputView.printQuickPicks(this.#myLotto.getQuickPicks());

    return this.handleCommonWinNum();
  }

  async handleCommonWinNum() {
    const input = await inputView.readCommonWinNum();
    this.#winNumber = new WinNumber();
    this.#winNumber.setCommonWinNum(input);

    return this.handleBonusWinNum();
  }

  async handleBonusWinNum() {
    const input = await inputView.readBonusWinNum();
    this.#winNumber.setBonusWinNum(input);

    return console.log(this.#winNumber.getCommonWinNum(), this.#winNumber.getBonusWinNum());
  }
}
