import { OPTION } from '../constants/Lotto';
import Validation from '../validations/Lotto';

class LottoCalculator {
  /** @type {Lotto[]} */
  #lottoes;

  /** @type {number[]} */
  #numbers;

  /** @type {number} */
  #bonus;

  /**
   * 당첨 번호와 보너스 번호 정하기
   * @param {number[]} numbers
   * @param {number} bonus
   */
  setWinningNumber(numbers, bonus) {
    Validation.validateLottoNumbersWithBonus(numbers, bonus);

    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  /**
   * 계산할 로또 클래스 입력
   * @param {Lotto[]} lottoes
   */
  setLottoes(lottoes) {
    this.#lottoes = lottoes;
  }

  /**
   * 등록된 로또의 추첨 결과 통계 구하기 (낙첨, 1~n등순)
   * @returns {number[]}
   */
  getResult() {
    return this.#lottoes.reduce(
      (previousValue, lotto) => {
        const result = previousValue;
        const rank = lotto.getRank(this.#numbers, this.#bonus);
        result[rank] += 1;
        return result;
      },
      new Array(OPTION.WINNING_RANKING + 1).fill(0),
    );
  }
}

export default LottoCalculator;
