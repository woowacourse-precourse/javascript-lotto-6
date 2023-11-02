import InputView from '../view/InputView.js';
import AmountValidator from '../validator/AmountValidator.js';

class LottoGame {
  async startGame() {
    const amount = await this.#getAmountInput();
  }

  async #getAmountInput() {
    const amount = await InputView.inputAmount();
    this.#validateAmountInput(amount);
  }

  #validateAmountInput(amount) {
    AmountValidator.checkIsNegative(amount);
    AmountValidator.checkIsNotInUnit(amount);
  }
}

export default LottoGame;
