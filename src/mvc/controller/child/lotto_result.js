import CalculateLottoResult from '../../model/calculate_lotto_result.js';
import PrintLottoResult from '../../view/print_lotto_result.js';

class LottoResultManage {
  #randomLotto;
  #winningNum;
  #bonusNum;

  constructor(RANDOM_LOTTO, WINNING_NUM, BONUS_NUM) {
    this.#randomLotto = RANDOM_LOTTO;
    this.#winningNum = WINNING_NUM;
    this.#bonusNum = BONUS_NUM;
  }

  async calculateLottoResult() {
    this.#winningNum = this.#winningNum.map(Number);
    this.#bonusNum = Number(this.#bonusNum);
    const RESULT = new CalculateLottoResult(this.#randomLotto, this.#winningNum, this.#bonusNum);
    const LOTTO_RESULT = RESULT.lottoResult;
    this.#printLottoResult(LOTTO_RESULT);
  }

  #printLottoResult(LOTTO_RESULT) {
    new PrintLottoResult(LOTTO_RESULT).printResult();
  }
}

export default LottoResultManage;
