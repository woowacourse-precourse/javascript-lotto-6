import Validator from '../utils/validation.js';
import MakeLottoModel from '../model/MakeLottoModel.js';
import UserInputView from '../view/UserInputView.js';
import UserOutputView from '../view/UserOutputView.js';
import { OPTIONS } from '../constants/Constants.js';

class GameController {
  #purchasePrice = 0;

  #ticketCount = 0;

  async inputPurchasePrice() {
    const price = Number(await UserInputView.inputPrice());
    try {
      Validator.purchasePrice(price);
      this.#purchasePrice = price;
    } catch (error) {
      UserOutputView.printError(error.message);
      await this.inputPurchasePrice();
    }
  }

  calculateTicketCount() {
    this.#ticketCount = this.#purchasePrice / OPTIONS.priceUnit;
    UserOutputView.printTicketCount(this.#ticketCount);
  }

  makeAndPrintLottos() {
    const lottos = MakeLottoModel.buyLottos(this.#ticketCount);
    UserOutputView.printLotto(lottos);
  }

  async startGame() {
    await this.inputPurchasePrice();
    this.calculateTicketCount();
    this.makeAndPrintLottos();
  }
}

export default GameController;
