import inputView from '../view/inputView.js';
import outputView from '../view/outputview.js';
import MyWallet from '../Model/MyWallet.js';
import MyLotto from '../Model/MyLotto.js';
import WinNumber from '../Model/WinNumber.js';
import Service from '../Service/Service.js';

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
    this.#myLotto.setQuickPicks();
    outputView.printQuickPicks(this.#myLotto.getQuickPicks());

    return this.handleCommonWinNumber();
  }

  async handleCommonWinNumber() {
    const input = await inputView.readCommonWinNumber();
    this.#winNumber = new WinNumber();
    this.#winNumber.setCommonWinNum(input);

    return this.handleBonusWinNumber();
  }

  async handleBonusWinNumber() {
    const input = await inputView.readBonusWinNumber();
    this.#winNumber.setBonusWinNum(input);

    return this.handleCompareNumber();
  }

  handleCompareNumber() {
    const service = new Service(this.#myLotto, this.#winNumber);

    service.compareEachNumber();
    return console.log(this.#myLotto.getWinCountArr());
  }
}
