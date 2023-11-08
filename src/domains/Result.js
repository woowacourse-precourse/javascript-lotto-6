import { RESULT_KEY, GAME } from "../constant/GameConfig.js";

class Result {
  constructor(lottos, winningNumbers) {
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
  }

  compareNumbers(results, lotto) {
    const count = this.winningNumbers.countMatchLottoNumber(lotto);
    const isMatchBonus = this.winningNumbers.isMatchBonusNumber(lotto);

    if (count >= 3) {
      let matchCount = isMatchBonus ? RESULT_KEY[3] : count;
      results[matchCount] = results[matchCount] + 1;
    }

    return results;
  }

  getTotalPrize(results) {
    return (
      results[RESULT_KEY[0]] * GAME.prize[RESULT_KEY[0]] +
      results[RESULT_KEY[1]] * GAME.prize[RESULT_KEY[1]] +
      results[RESULT_KEY[2]] * GAME.prize[RESULT_KEY[2]] +
      results[RESULT_KEY[3]] * GAME.prize[RESULT_KEY[3]] +
      results[RESULT_KEY[4]] * GAME.prize[RESULT_KEY[4]]
    );
  }

  getRoi(totalPrize, investment) {
    const profit = totalPrize - investment;
    return Number(((profit / investment + 1) * 100).toFixed(2));
  }

  getResults() {
    const results = RESULT_KEY.reduce((obj, key) => ({ ...obj, [key]: 0 }), {});

    for (const lotto of this.lottos) {
      this.compareNumbers(results, lotto);
    }

    const investment = this.lottos.length * GAME.settings.unit;
    const totalPrize = this.getTotalPrize(results);
    const roi = this.getRoi(totalPrize, investment);

    return { results, roi };
  }
}

export default Result;
