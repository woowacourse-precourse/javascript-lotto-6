import { LOTTO_PRIZE } from "../constants.js";

class CalculatorLottoResult {
  #user;
  #targetLotto;
  constructor(user, targetLotto) {
    this.#user = user;
    this.#targetLotto = targetLotto;
  }

  getLottoWinningCount() {
    let lottoWinningCounts = [0, 0, 0, 0, 0];
    this.#user.getLottoList().forEach((lotto) => {
      const lottoResult = this.#targetLotto.calLottoResult(lotto);
      if (lottoResult !== 0) {
        const lottoWinningGradeIndex = lottoResult - 1;
        lottoWinningCounts[lottoWinningGradeIndex]++;
      }
    });
    return lottoWinningCounts;
  }

  getTotalProfit(lottoWinningCounts) {
    return lottoWinningCounts.reduce((acc, count, index) => {
      return acc + count * LOTTO_PRIZE[index + 1].money;
    }, 0);
  }

  getTotalProfitRate(totalProfit) {
    const consumption = this.#user.getUsedMoney();
    return Number(((totalProfit / consumption) * 100).toFixed(1));
  }
}

export default CalculatorLottoResult;
