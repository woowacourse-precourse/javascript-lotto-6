import inputView from '../view/inputView.js';
import outputView from '../view/outputview.js';
import MyWallet from '../Model/MyWallet.js';
import MyLotto from '../Model/MyLotto.js';
import WinNumber from '../Model/WinNumber.js';
import Service from '../Service/Service.js';
import ReturnMoneyService from '../Service/ReturnRateService.js';

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

  async handleLottoCount(input) {
    this.#myLotto.setLottoCount(input);
    outputView.printLottoCount(this.#myLotto.getLottoCount());

    return this.handleQuickPicks();
  }

  async handleQuickPicks() {
    this.#myLotto.setQuickPicks();
    outputView.printQuickPicks(this.#myLotto.getQuickPicks());

    return this.handleCommonWinNumber();
  }

  async handleCommonWinNumber() {
    const input = await inputView.readCommonWinNumber();
    this.#winNumber = new WinNumber();
    await this.#winNumber.setCommonWinNum(input);

    return this.handleBonusWinNumber();
  }

  async handleBonusWinNumber() {
    const input = await inputView.readBonusWinNumber();
    await this.#winNumber.setBonusWinNum(input);

    return this.handleWinCount();
  }

  handleWinCount() {
    const service = new Service(this.#myLotto, this.#winNumber);
    service.compareNumber();
    this.#myLotto.setWinResult();
    outputView.printWinCount(this.#myLotto.getWinResultArr());

    return this.handleReturnRate();
  }

  async handleReturnRate() {
    const returnMoneyService = new ReturnMoneyService(this.#myLotto, this.#myWallet);
    await returnMoneyService.calculateWinMoney();

    return outputView.printReturnRate(this.#myWallet.getReturnRate());
  }
}
