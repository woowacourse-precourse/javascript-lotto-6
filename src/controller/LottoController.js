import InputView from '../view/InputView.js';
import amountValidator from '../validator/amountValidator.js';
import OutputView from '../view/OutputView.js';
import AmountValidator from '../validator/amountValidator.js';

class LottoController {
  #amount;

  async startLotto() {
    this.#amount = await this.getAmount();
  }

  async getAmount() {
    try {
      const amount = await InputView.readAmount();
      AmountValidator.validation(amount);
      return amount;
    } catch (error) {
      OutputView.pritnError(error.message);
      return this.getAmount();
    }
  }
}

export default LottoController;
