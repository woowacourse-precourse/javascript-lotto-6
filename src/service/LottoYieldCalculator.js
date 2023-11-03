import LOTTO_SETTINGS from "../config/gameSetting.js";

export default class LottoYieldCalculator {
  static getTotalPrize(lottos, drawnLotto) {
    const totalPrize = lottos.reduce((accumulator, lotto) => {
      return accumulator + this.calculate(lotto, drawnLotto);
    }, 0);

    return totalPrize;
  }

  static calculate(lotto, drawnLotto) {
    const lottoNumbers = lotto.getNumbers();
    const { numbers, bonusNumber } = drawnLotto.getFullNumbers();

    const matchCount = this.#getMatchCount(lottoNumbers, numbers);
    if (matchCount === 5 && lottoNumbers.includes(bonusNumber)) {
      return LOTTO_SETTINGS.PRIZES.SECOND;
    }
    return this.#getPrize(matchCount);
  }

  static #getMatchCount(lottoNumbers, numbers) {
    const matchCount = lottoNumbers.filter((lottoNumber) =>
      numbers.includes(lottoNumber)
    ).length;
    return matchCount;
  }

  static #getPrize(matchCount) {
    const { NUMBERS_PER_TICKET, PRIZES } = LOTTO_SETTINGS;

    switch (matchCount) {
      case NUMBERS_PER_TICKET - 3:
        return PRIZES.FIFTH;
      case NUMBERS_PER_TICKET - 2:
        return PRIZES.FOURTH;
      case NUMBERS_PER_TICKET - 1:
        return PRIZES.THIRD;
      case NUMBERS_PER_TICKET:
        return PRIZES.FIRST;
      default:
        return 0;
    }
  }
}
