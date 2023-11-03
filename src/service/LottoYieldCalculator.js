import LOTTO_SETTINGS from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  static calculate(lotto, drawnLotto) {
    const lottoNumbers = lotto.getNumbers();
    const { numbers, bonusNumber } = drawnLotto.getFullNumbers();

    const matchCount = this.#getMatchCount(lottoNumbers, numbers);
    if (matchCount === 5) {
      return this.#compareBonusNumber(lottoNumbers, bonusNumber);
    }
    return this.#getPrize(matchCount);
  }

  static #getMatchCount(lottoNumbers, numbers) {
    const matchCount = lottoNumbers.filter((lottoNumber) =>
      numbers.includes(lottoNumber)
    ).length;
    return matchCount;
  }

  static #compareBonusNumber(lottoNumbers, bonusNumber) {
    if (lottoNumbers.includes(bonusNumber)) return LOTTO_SETTINGS.PRIZES.SECOND;
  }
}
