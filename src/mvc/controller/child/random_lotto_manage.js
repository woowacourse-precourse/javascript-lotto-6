import CalculateRandomLotto from '../../model/calculate_random_lotto.js';
import PrintRandomLotto from '../../view/print_random_lotto.js';
import PurchaseAmountError from '../../../utils/error/type/purchase_amount_error.js';
import printError from '../../../utils/error/print_error.js';
import Question from '../../../utils/input/question.js';
import userInput from '../../../utils/input/user_input.js';

class RandomLottoManage {
  #randomLotto = null;

  get randomLotto() {
    return this.#randomLotto;
  }

  async inputPurchaseAmount() {
    const AMOUNT = await userInput(Question.purchaseAmount());
    await this.#checkPurchaseAmount(AMOUNT);
  }

  async #checkPurchaseAmount(AMOUNT) {
    try {
      new PurchaseAmountError(AMOUNT);
      this.#printRandomLotto(AMOUNT);
    } catch (error) {
      printError(error);
      await this.inputPurchaseAmount();
    }
  }

  #printRandomLotto(AMOUNT) {
    const LOTTO_QUANTITY = Number(AMOUNT) / 1000;
    this.#randomLotto = new CalculateRandomLotto(LOTTO_QUANTITY).randomLotto;
    new PrintRandomLotto(LOTTO_QUANTITY, this.#randomLotto).printLotto();
  }
}

export default RandomLottoManage;
