import inputView from '../view/InputView.js';
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
    this.#myLotto.setlottoCount(input);

    return console.log(this.#myLotto.getQuickPicks());
  }
}
