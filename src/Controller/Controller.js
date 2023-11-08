import inputView from '../view/InputView.js';
import MyWallet from '../Model/MyWallet.js';

export default class Controller {
  #myWallet;

  constructor() {
    this.#myWallet = new MyWallet();
  }

  async handlePurchaseAmount() {
    const input = await inputView.readPurchaseAmount();
    this.#myWallet.setPurchaseAmount(input);

    return console.log(this.#myWallet.getPurchaseAmount());
  }
}
