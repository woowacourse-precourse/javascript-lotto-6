const LOTTO_AWARD = {
  1: {
    money: 2000000000,
    message: "6개 일치",
  },
  2: {
    money: 30000000,
    message: "5개 일치, 보너스 볼 일치",
  },
  3: {
    money: 1500000,
    message: "5개 일치",
  },
  4: {
    money: 50000,
    message: "4개 일치",
  },
  5: {
    money: 5000,
    message: "3개 일치",
  },
};

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
      return acc + count * LOTTO_AWARD[index + 1].money;
    }, 0);
  }
}

export default CalculatorLottoResult;
