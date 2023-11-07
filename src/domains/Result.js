import { RESULT, resultOrder } from "../constant/gameMessge.js";

class Result {
  constructor(lottos, winningRate) {
    this.lottos = lottos;
    this.winningRate = winningRate;
  }

  calcResults() {
    const results = this.lottos.reduce(
      (results, lotto) => {
        return this.updateResults(results, lotto);
      },
      {
        [resultOrder[0]]: 0,
        [resultOrder[1]]: 0,
        [resultOrder[2]]: 0,
        [resultOrder[3]]: 0,
        [resultOrder[4]]: 0,
      },
    );

    const investment = this.lottos.length * 1000;
    const totalPrize = this.calcTotalPrize(results);
    const roi = this.calcRoi(totalPrize, investment);

    return { results, roi };
  }

  updateResults(results, lotto) {
    const count = this.winningRate.countMatchLottoNumber(lotto);
    const isMatchBonus = this.winningRate.isMatchBonusNumber(lotto);

    if (count >= 3) {
      let targetResultKey = isMatchBonus ? resultOrder[3] : count;
      results[targetResultKey] = results[targetResultKey] + 1;
    }

    return results;
  }

  calcTotalPrize(results) {
    return (
      results[resultOrder[0]] * RESULT.prizeMap[resultOrder[0]] +
      results[resultOrder[1]] * RESULT.prizeMap[resultOrder[1]] +
      results[resultOrder[2]] * RESULT.prizeMap[resultOrder[2]] +
      results[resultOrder[3]] * RESULT.prizeMap[resultOrder[3]] +
      results[resultOrder[4]] * RESULT.prizeMap[resultOrder[4]]
    );
  }

  calcRoi(totalPrize, investment) {
    const profit = totalPrize - investment;
    return Number(((profit / investment + 1) * 100).toFixed(2));
  }
}

export default Result;
