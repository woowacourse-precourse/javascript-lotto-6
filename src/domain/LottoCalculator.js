import { OTHERS } from '../utils/constants.js';

class LottoCalculator {
  constructor(lotto, bonusNumber, winningNumbers) {
    this.lotto = lotto;
    this.bonusNumber = bonusNumber;
    this.winningNumbers = winningNumbers;
  }

  calculate() {
    const correctNumbers = this.lotto.filter((number) => this.winningNumbers.includes(number));
    const numberOfCorrectNumbers = correctNumbers.length;

    if (numberOfCorrectNumbers === 5 && this.lotto.includes(this.bonusNumber)) {
      return OTHERS.bonusNumber;
    }

    return numberOfCorrectNumbers;
  }
}

export default LottoCalculator;
