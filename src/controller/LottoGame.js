import { inputMoney } from '../view/inputPrompt.js';
import { validateDivisible, validateNumber } from '../utils/validateFn.js';

class LottoGame {
  #money = 0;

  async buyLotto() {
    await this.#setMoney();
  }

  async #setMoney() {
    const input = await inputMoney();
    validateNumber(input);
    validateDivisible(input);
    this.#money = parseInt(input);
  }
}

export default LottoGame;
