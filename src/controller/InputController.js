import Lotto from '../Lotto.js';
import InputView from '../view/InputView.js';
import ValidateController from './ValidateController.js';

export default class InputController {
  inputView = new InputView();
  validateController = new ValidateController();
  #amount = 0;
  #winningNumbers = [];

  async inputStart() {
    await this.getAmount();
  }

  async getAmount() {
    this.#amount = await this.inputView.readAmount();
    this.validateController.validateAmount(this.#amount);
  }

  async getWinningNumber() {
    const numberString = await this.inputView.readNumber();
    this.#winningNumbers = numberString.split(',');
    const lotto = new Lotto(this.#winningNumbers);
  }
}
