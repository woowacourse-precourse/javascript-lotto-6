import LOTTO_SETTINGS from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  static checkMatchCount(lottonumbers, { drawnLottoNumbers, bonusNumber }) {
    const matchCount = lottonumbers.filter((number) =>
      drawnLottoNumbers.includes(number)
    ).length;
    const hasBonusNumber = lottonumbers.includes(bonusNumber);

    return { matchCount, hasBonusNumber };
  }
}
