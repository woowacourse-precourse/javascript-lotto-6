import Question from '../../../utils/input/question.js';
import userInput from '../../../utils/input/user_input.js';

class RandomLottoManage {
  #randomLotto = null;

  get randomLotto() {
    return this.#randomLotto;
  }

  async inputPurchaseAmount() {
    const AMOUNT = await userInput(Question.purchaseAmount());
  }
}

export default RandomLottoManage;
