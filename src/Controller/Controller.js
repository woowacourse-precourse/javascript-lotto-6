import inputView from '../view/inputView.js';
import outputView from '../view/outputview.js';
import MyWallet from '../Model/MyWallet.js';
import MyLotto from '../Model/MyLotto.js';

export default class Controller {
  #myWallet;

  #myLotto;

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
    this.#myLotto.setlottoCount(input);
    outputView.printLottoCount(this.#myLotto.getLottoCount());

    return this.handleQuickPicks();
  }

  handleQuickPicks() {
    outputView.printQuickPicks(this.#myLotto.getQuickPicks());
  }
}
