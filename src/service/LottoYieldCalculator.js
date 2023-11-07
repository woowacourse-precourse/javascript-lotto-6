import { LottoSettings } from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  constructor() {
    this.setting = new LottoSettings();
  }
  caculateYieldRate(result, money) {
    const totalPrize = this.#getTotalPrize(result);
    const yieldRate = Number(((totalPrize / money) * 100).toFixed(2));
    return yieldRate;
  }

  #getTotalPrize(result) {
    const totalPrize = Object.entries(result).reduce(
      (accPrize, [key, matchCount]) => {
        return accPrize + this.#calculatePrizeForRank(key, matchCount);
      },
      0
    );
    return totalPrize;
  }

  #calculatePrizeForRank(rank, matchCount) {
    return this.setting.getPrizeForRank(rank) * matchCount;
  }

  getResult(lottosNumbers, drawnLotto) {
    const result = this.#initializeResultObject();
    const { drawnLottoNumbers, bonusNumber } = drawnLotto.getFullNumbers();
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

  #initializeResultObject() {
    const result = Object.keys(this.setting.getAllPrizeDetails()).reduce(
      (acc, prize) => {
        acc[prize] = 0;
        return acc;
      },
      {}
    );
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
    for (const [key, { matchNum }] of Object.entries(
      this.setting.getAllPrizeDetails()
    )) {
      if (
        matchCount === matchNum &&
        (!isBonusMatched || key === this.getSecondPrizeRank())
      ) {
        return key;
      }
    }
    return null;
  }
}
