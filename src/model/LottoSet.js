import { PRIZE_CRITERIA, PRIZE_MONEY } from '../constants/PrizeConstant.js';
import { DEFAULT_SCORE_BOARD } from '../constants/LottoConstants.js';

class LottoSet {
  #lottoSet;

  constructor(lottoSet) {
    this.#lottoSet = lottoSet;
  }

  toString() {
    return this.#lottoSet.join('\n');
  }

  makeScoreBoard(winningLotto) {
    const scoreBoard = DEFAULT_SCORE_BOARD;
    this.#lottoSet.forEach((candidateLotto) => {
      const score = winningLotto.calculateScore(candidateLotto);
      if (score >= 3) {
        scoreBoard[PRIZE_CRITERIA[score]] += 1;
        scoreBoard.prize += PRIZE_MONEY[PRIZE_CRITERIA[score]];
      }
    });
    return scoreBoard;
  }
}

export default LottoSet;
