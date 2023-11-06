import InputView from '../view/InputView.js';
import ValidateController from './ValidateController.js';

export default class InputController {
  inputView = new InputView();
  validateController = new ValidateController();
  #lottoAmount = 0;

  constructor() {
    this.inputView = new InputView();
  }

  async inputStart() {
    await this.getAmount();
  }

  async getAmount() {
    this.#lottoAmount = await this.inputView.readAmount();
    this.validateController.validateAmount(this.#lottoAmount);
  }
}
