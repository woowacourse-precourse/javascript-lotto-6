import CalculateRandomLotto from '../../model/calculate_random_lotto.js';
import PrintRandomLotto from '../../view/print_random_lotto.js';
import PurchaseAmountError from '../../../utils/error/type/purchase_amount_error.js';
import printError from '../../../utils/error/print_error.js';
import Question from '../../../utils/input/question.js';
import userInput from '../../../utils/input/user_input.js';

class RandomLottoManage {
  #randomLotto = null;
  #amount = null;

  get randomLotto() {
    return this.#randomLotto;
  }

  async startLotto() {
    await this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    while (true) {
      this.#amount = await userInput(Question.purchaseAmount());
      try {
        new PurchaseAmountError(this.#amount);
        break;
      } catch (error) {
        printError(error);
      }
    }
    this.#printRandomLotto();
  }

  #printRandomLotto() {
    const LOTTO_QUANTITY = Number(this.#amount) / 1000;
    this.#randomLotto = new CalculateRandomLotto(LOTTO_QUANTITY).randomLotto;
    new PrintRandomLotto(LOTTO_QUANTITY, this.#randomLotto).printLotto();
  }
}

export default RandomLottoManage;
