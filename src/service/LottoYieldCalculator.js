import { LottoSettings } from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  constructor() {
    this.setting = new LottoSettings();
  }
  calculateYieldRate(result, money) {
    const totalPrize = this.getTotalPrize(result);
    const yieldRate = Number(((totalPrize / money) * 100).toFixed(1));

    return yieldRate;
  }

  getTotalPrize(result) {
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
    lottosNumbers.forEach((lottoNumbers) => {
      const { matchCount, hasBonusNumber } = this.#checkMatchCount(
        lottoNumbers,
        drawnLotto
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

  #checkMatchCount(lottonumbers, drawnLotto) {
    const { drawnLottoNumbers, bonusNumber } = drawnLotto.getFullNumbers();
    const matchCount = lottonumbers.filter((number) =>
      drawnLottoNumbers.includes(number)
    ).length;
    const hasBonusNumber = lottonumbers.includes(bonusNumber);

    return { matchCount, hasBonusNumber };
  }

  #findPrizeKey(matchCount, isBonusMatched) {
    const prizeDetailEntries = Object.entries(
      this.setting.getAllPrizeDetails()
    );
    const foundKey = prizeDetailEntries.find(
      ([key, { matchNum }]) =>
        matchCount === matchNum &&
        (!isBonusMatched || key === this.setting.getSecondPrizeRank())
    );

    return foundKey ? foundKey[0] : null;
  }
}
