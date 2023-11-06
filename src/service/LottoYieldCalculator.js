export default class LottoYieldCalculator {
  #setting;
  constructor(setting) {
    this.#setting = setting;
  }
  caculateYieldRate(result, money) {
    const totalPrize = Object.entries(result).reduce(
      (accPrize, [key, matchCount]) => {
        return accPrize + this.#setting.WINNINGS[key].prize * matchCount;
      },
      0
    );
    const yieldRate = Number(((totalPrize / money) * 100).toFixed(2));
    return yieldRate;
  }

  getResult(lottosNumbers, drawnLottoNumbers, bonusNumber) {
    const result = Object.keys(this.#setting.WINNINGS).reduce((acc, prize) => {
      acc[prize] = 0;
      return acc;
    }, {});
    lottosNumbers.forEach((lottoNumbers) => {
      const { matchCount, hasBonusNumber } = this.#checkMatchCount(
        lottoNumbers,
        drawnLottoNumbers,
        bonusNumber
      );
      const prize = this.#findPrizeKey(matchCount, hasBonusNumber);
      if (prize) result[prize] += 1;
    });
    return result;
  }

  #checkMatchCount(lottonumbers, drawnLottoNumbers, bonusNumber) {
    const matchCount = lottonumbers.filter((number) =>
      drawnLottoNumbers.includes(number)
    ).length;
    const hasBonusNumber = lottonumbers.includes(bonusNumber);

    return { matchCount, hasBonusNumber };
  }

  #findPrizeKey(matchCount, isBonusMatched) {
    for (const [key, { matchNum }] of Object.entries(this.#setting.WINNINGS)) {
      if (
        matchCount === matchNum &&
        (!isBonusMatched || key === this.#setting.PRIZE_RANKS.SECOND_PRIZE)
      ) {
        return key;
      }
    }
    return null;
  }
}
