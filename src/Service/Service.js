import { LOTTOSET } from '../Constant/SETTING.js';

export default class Service {
  #myLotto;

  #winNumber;

  constructor(myLotto, winNumber) {
    this.#myLotto = myLotto;
    this.#winNumber = winNumber;
  }

  compareNumber() {
    this.#myLotto.getQuickPicks().forEach((quickPick) => {
      this.compareEachNumber(quickPick);
    });
  }

  compareEachNumber(quickPick) {
    const intersection = quickPick.filter((num) => this.#winNumber.getCommonWinNum().includes(num));
    if (
      intersection.length === LOTTOSET.bonusCnt &&
      quickPick.includes(this.#winNumber.getBonusWinNum())
    ) {
      this.#myLotto.setWinCount(-intersection.length);
    }
    if (
      intersection.length !== LOTTOSET.bonusCnt ||
      !quickPick.includes(this.#winNumber.getBonusWinNum())
    ) {
      this.#myLotto.setWinCount(intersection.length);
    }
  }
}
