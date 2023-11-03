import LOTTO_SETTINGS from "../config/gameSetting";

export default class LottoYieldCalculator {
  calculate(lotto, drawnLotto) {
    const lottoNumbers = lotto.getNumbers();
    const drawnLottoNumbers = drawnLotto.getNumbers();
    const bonusNumber = drawnLotto.getBonusNumber();

    const matchCount = lottoNumbers.filter((number) =>
      drawnLottoNumbers.includes(number)
    ).length;

    if (matchCount === 5) {
      matchCount += 1;
    }
  }
}
