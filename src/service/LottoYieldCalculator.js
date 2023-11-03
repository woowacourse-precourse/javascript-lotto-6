import LOTTO_SETTINGS from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  static calculate(lotto, drawnLotto) {
    const lottoNumbers = lotto.getNumbers();
    const { numbers, bonusNumber } = drawnLotto.getFullNumbers();

    const matchCount = this.#getMatchCount(lottoNumbers, {
      numbers,
      bonusNumber,
    });
  }

  static #getMatchCount(lottoNumbers, { numbers, bonusNumber }) {
    let matchCount = lottoNumbers.filter((lottoNumber) =>
      numbers.includes(lottoNumber)
    ).length;

    if (matchCount === 5) {
      if (lottoNumbers.includes(bonusNumber)) {
        matchCount += 1;
      }
    }
    return matchCount;
  }
}
