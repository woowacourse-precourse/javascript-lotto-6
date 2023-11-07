import CalculateLottoResult from '../../model/calculate_lotto_result.js';
import PrintLottoResult from '../../view/print_lotto_result.js';
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
      this.#printLottoResult();
    } catch (error) {
      printError(error);
      await this.#inputBonusNum();
    }
  }

  #printLottoResult() {
    this.#winningNum = this.#winningNum.map(Number);
    this.#bonusNum = Number(this.#bonusNum);
    const RESULT = new CalculateLottoResult(this.#randomLotto, this.#winningNum, this.#bonusNum);
    const LOTTO_RESULT = RESULT.lottoResult;
    new PrintLottoResult(LOTTO_RESULT).printResult();
  }
}

export default WinningLottoManage;
