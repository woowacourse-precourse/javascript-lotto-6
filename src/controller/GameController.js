import Validator from '../utils/validation.js';
import MakeLottoModel from '../model/MakeLottoModel.js';
import UserInputView from '../view/UserInputView.js';
import UserOutputView from '../view/UserOutputView.js';
import { OPTIONS } from '../constants/Constants.js';

class GameController {
  #purchasePrice = 0;

  #ticketCount = 0;

  #lottos = [];

  #winningLottoNumbers = [];

  #winningBonusNumbers = 0;

  async enterPurchasePrice() {
    const price = Number(await UserInputView.inputPrice());
    try {
      Validator.purchasePrice(price);
      this.#purchasePrice = price;
    } catch (error) {
      UserOutputView.printError(error.message);
      await this.enterPurchasePrice();
    }
  }

  calculateTicketCount() {
    this.#ticketCount = this.#purchasePrice / OPTIONS.priceUnit;
    UserOutputView.printTicketCount(this.#ticketCount);
  }

  makeAndPrintLottos() {
    this.#lottos = MakeLottoModel.buyLottos(this.#ticketCount);
    UserOutputView.printLotto(this.#lottos);
  }

  async enterWinningNumbers() {
    const input = await UserInputView.inputWinningNumbers();
    const numbers = input.split(',').map(Number);
    try {
      Validator.winningNumbers(numbers);
      this.#winningLottoNumbers = numbers;
    } catch (error) {
      UserOutputView.printError(error.message);
      await this.enterWinningNumbers();
    }
  }

  async startGame() {
    await this.enterPurchasePrice();
    this.calculateTicketCount();
    this.makeAndPrintLottos();
    await this.enterWinningNumbers();
  }
}

export default GameController;
