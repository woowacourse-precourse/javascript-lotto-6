import {
  COUNT,
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  MATCH_COUNTS,
  PERCENTAGE,
  RANKING,
} from './constants/conditions.js';
import RANKING_PRIZE from './constants/rankingPrize.js';

const IS_BOUNS_INDEX = 1;

export default class LottoGame {
  #autoLottos;

  #winningLotto;

  #bonus;

  constructor(autoLottos, winningLotto, bonus) {
    this.#autoLottos = autoLottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
  }

  getWinningResult() {
    const matchCountList = this.#countMatchingNumbers();
    const rankingList = this.#transformRankingList(matchCountList);
    const rateOfReturn = this.#getRateOfReturn(rankingList);
    return { rankingList, rateOfReturn };
  }

  #countMatchingNumbers() {
    const matchCountList = [];
    this.#autoLottos.reduce((acc, autoLotto) => {
      let count = DEFAULT_NUM;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += COUNT.plus;
      });
      this.#updateMatchCountList(matchCountList, count, autoLotto);
      return acc;
    }, this.#winningLotto);
    return matchCountList;
  }

  #updateMatchCountList(matchCountList, count, autoLotto) {
    if (count === MATCH_COUNTS.five) {
      matchCountList.push(
        autoLotto.includes(this.#bonus) ? [count, true] : [count, false],
      );
    }
    matchCountList.push(count);
  }

  #transformRankingList(matchCountList) {
    const rankingList = [];
    matchCountList.forEach((count) => {
      if (Array.isArray(count)) {
        rankingList.push(
          count[IS_BOUNS_INDEX] ? RANKING.second : RANKING.third,
        );
      }
      if (count === MATCH_COUNTS.three) rankingList.push(RANKING.fifth);
      if (count === MATCH_COUNTS.four) rankingList.push(RANKING.fourth);
      if (count === MATCH_COUNTS.all) rankingList.push(RANKING.first);
    });
    return rankingList;
  }

  #calculateRateOfReturn(income) {
    const inputMoney = this.#autoLottos.length * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getRateOfReturn(rankingList) {
    let income = DEFAULT_NUM;
    rankingList.forEach((ranking) => {
      income += RANKING_PRIZE[ranking];
    });
    return this.#calculateRateOfReturn(income);
  }
}
