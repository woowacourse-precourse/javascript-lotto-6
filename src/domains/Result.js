import { GAME, RESULT_ORDER } from "../constant/gameMessge.js";

class Result {
  constructor(lottos, winningRate) {
    this.lottos = lottos;
    this.winningRate = winningRate;
  }

  calcResults() {
    const results = RESULT_ORDER.reduce((obj, key) => ({ ...obj, [key]: 0 }), {});

    for (const lotto of this.lottos) {
      this.updateResults(results, lotto);
    }

    const investment = this.lottos.length * 1000;
    const totalPrize = this.calcTotalPrize(results);
    const roi = this.calcRoi(totalPrize, investment);

    return { results, roi };
  }

  updateResults(results, lotto) {
    const count = this.winningRate.countMatchLottoNumber(lotto);
    const isMatchBonus = this.winningRate.isMatchBonusNumber(lotto);

    if (count >= 3) {
      let targetResultKey = isMatchBonus ? RESULT_ORDER[3] : count;
      results[targetResultKey] = results[targetResultKey] + 1;
    }

    return results;
  }

  calcTotalPrize(results) {
    return (
      results[RESULT_ORDER[0]] * GAME.prizeMap[RESULT_ORDER[0]] +
      results[RESULT_ORDER[1]] * GAME.prizeMap[RESULT_ORDER[1]] +
      results[RESULT_ORDER[2]] * GAME.prizeMap[RESULT_ORDER[2]] +
      results[RESULT_ORDER[3]] * GAME.prizeMap[RESULT_ORDER[3]] +
      results[RESULT_ORDER[4]] * GAME.prizeMap[RESULT_ORDER[4]]
    );
  }

  calcRoi(totalPrize, investment) {
    const profit = totalPrize - investment;
    return Number(((profit / investment + 1) * 100).toFixed(2));
  }
}

export default Result;
