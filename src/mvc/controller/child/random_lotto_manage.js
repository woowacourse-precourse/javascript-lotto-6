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
    } catch (error) {
      printError(error);
      await this.inputPurchaseAmount();
    }
  }
}

export default RandomLottoManage;
