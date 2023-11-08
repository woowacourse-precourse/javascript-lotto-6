import { Console } from '@woowacourse/mission-utils';
import { LOTTO_OUTCOMES, PRIZE_DESCRIPTIONS } from '../constants';

class LottoOutcome {
  #outcomes;

  #prizeMoney = LOTTO_OUTCOMES;

  #prizeDescriptions = PRIZE_DESCRIPTIONS;

  constructor(outcomes) {
    this.#outcomes = outcomes;
  }

  calculateOutcome(lottoContainer, winningLotto, bonusNum, price) {
    const result = this.#outcomes.map(() => 0);
    lottoContainer.forEach(lotto => {
      const count = lotto.matchNums(winningLotto, bonusNum);
      if (count >= 0) result[count] += 1;
    });

    Console.print(this.#getWinningOutcomeMessage(result));
    Console.print(this.#getRatioOfReturnMessage(result, price));
  }

  #getWinningOutcomeMessage(result) {
    return this.#prizeDescriptions
      .map((desc, index) => `${desc} - ${result[index] || 0}개`)
      .join('\\n   ');
  }

  #getRatioOfReturnMessage(result, price) {
    const totalOutcome = result.reduce(
      (acc, count, index) => acc + count * this.#prizeMoney[index],
      0,
    );
    const ratio = this.#calculateRatio(totalOutcome, price);
    return `총 수익률은 ${ratio}%입니다.`;
  }

  #calculateRatio(totalOutcome, price) {
    return ((totalOutcome / price) * 100).toFixed(1);
  }
}

export default LottoOutcome;
