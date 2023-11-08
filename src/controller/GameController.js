import Validator from '../utils/validation.js';
import MakeLottoModel from '../model/MakeLottoModel.js';
import MakeResultModel from '../model/MakeResultModel.js';
import UserInputView from '../view/UserInputView.js';
import UserOutputView from '../view/UserOutputView.js';
import { OPTIONS } from '../constants/Constants.js';

class GameController {
  #purchasePrice = 0;

  #ticketCount = 0;

  #lottos = [];

  #winningNumbers = [];

  #bonusNumber = 0;

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
      this.#winningNumbers = numbers;
    } catch (error) {
      UserOutputView.printError(error.message);
      await this.enterWinningNumbers();
    }
  }

  async enterBonusNumber() {
    const number = Number(await UserInputView.inputBonusNumber());
    try {
      Validator.bonusNumber(number, this.#winningNumbers);
      this.#bonusNumber = number;
    } catch (error) {
      UserOutputView.printError(error.message);
      await this.enterBonusNumber();
    }
  }

  winningResult() {
    const matchCounts = MakeResultModel.calculateMatchCounts(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    const profit = MakeResultModel.calculateProfit(
      this.#purchasePrice,
      matchCounts,
    );
    UserOutputView.printMatchResult(matchCounts);
    UserOutputView.printProfitResult(profit);
  }

  async startGame() {
    await this.enterPurchasePrice();
    this.calculateTicketCount();
    this.makeAndPrintLottos();
    await this.enterWinningNumbers();
    await this.enterBonusNumber();
    this.winningResult();
  }
}

export default GameController;
