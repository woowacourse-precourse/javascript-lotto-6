import LOTTO_SETTINGS from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  static checkMatchCount(lottonumbers, drawnLottoNumbers, bonusNumber) {
    const matchCount = lottonumbers.filter((number) =>
      drawnLottoNumbers.includes(number)
    ).length;
    const hasBonusNumber = lottonumbers.includes(bonusNumber);

    return { matchCount, hasBonusNumber };
  }

  static getResult(lottosNumbers, drawnLottoNumbers, bonusNumber) {
    const result = Object.keys(LOTTO_SETTINGS.WINNINGS).reduce((acc, prize) => {
      acc[prize] = 0;
      return acc;
    }, {});

    lottosNumbers.forEach((lottoNumbers) => {
      const { matchCount, hasBonusNumber } = this.checkMatchCount(
        lottoNumbers,
        drawnLottoNumbers,
        bonusNumber
      );

      const prize = this.findPrizeKey(matchCount, hasBonusNumber);

      if (prize) result[prize] += 1;
    });

    return result;
  }

  static findPrizeKey(matchCount, isBonusMatched) {
    for (const [key, { matchNum, prize }] of Object.entries(
      LOTTO_SETTINGS.WINNINGS
    )) {
      if (
        matchCount === matchNum &&
        (!isBonusMatched || key === "SECOND_PRIZE")
      ) {
        return key;
      }
    }
    return null;
  }
}
