import Lotto from '../../../utils/error/type/Lotto.js';
import BonusNumError from '../../../utils/error/type/bonus_num_error.js';
import printError from '../../../utils/error/print_error.js';
import Question from '../../../utils/input/question.js';
import userInput from '../../../utils/input/user_input.js';

class WinningLottoManage {
  #randomLotto;
  #winningNum = null;
  #bonusNum = null;

  constructor(RANDOM_LOTTO) {
    this.#randomLotto = RANDOM_LOTTO;
  }

  async inputWinningNum() {
    this.#winningNum = await userInput(Question.winningNum());
    this.#winningNum = this.#winningNum.split(',');
    this.#checkWinningNum();
  }

  async #checkWinningNum() {
    try {
      new Lotto(this.#winningNum);
      this.#inputBonusNum();
    } catch (error) {
      printError(error);
      await this.inputWinningNum();
    }
  }

  async #inputBonusNum() {
    this.#bonusNum = await userInput(Question.bonusNum());
    this.#checkBonusNum();
  }

  async #checkBonusNum() {
    try {
      new BonusNumError(this.#winningNum, this.#bonusNum);
    } catch (error) {
      printError(error);
      await this.#inputBonusNum();
    }
  }
}

export default WinningLottoManage;
