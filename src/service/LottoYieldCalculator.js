import { LOTTO_SETTINGS } from "./settings.js";

export default class LottoYieldCalculator {
  static caculateYieldRate(result, money) {
    const totalPrize = Object.entries(result).reduce(
      (accPrize, [key, matchCount]) => {
        return accPrize + LOTTO_SETTINGS.WINNINGS[key].prize * matchCount;
      },
      0
    );
    const yieldRate = Number(((totalPrize / money) * 100).toFixed(2));
    return yieldRate;
  }

  static getResult(lottosNumbers, drawnLottoNumbers, bonusNumber) {
    const result = Object.keys(LOTTO_SETTINGS.WINNINGS).reduce((acc, prize) => {
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

  static #checkMatchCount(lottonumbers, drawnLottoNumbers, bonusNumber) {
    const matchCount = lottonumbers.filter((number) =>
      drawnLottoNumbers.includes(number)
    ).length;
    const hasBonusNumber = lottonumbers.includes(bonusNumber);

    return { matchCount, hasBonusNumber };
  }

  static #findPrizeKey(matchCount, isBonusMatched) {
    for (const [key, { matchNum }] of Object.entries(LOTTO_SETTINGS.WINNINGS)) {
      if (
        matchCount === matchNum &&
        (!isBonusMatched || key === LOTTO_SETTINGS.PRIZE_RANKS.SECOND_PRIZE)
      ) {
        return key;
      }
    }
    return null;
  }
}
