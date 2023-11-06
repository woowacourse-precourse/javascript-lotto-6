import { OTHERS } from './utils/constants.js';

class LottoCalculator {
  constructor(lottoNumbers, bonusNumber, winningNumber) {
    this.lottoNumbers = lottoNumbers;
    this.bonusNumber = bonusNumber;
    this.winningNumber = winningNumber;
  }

  calculate() {
    const correctNumbers = this.lottoNumbers.filter((number) =>
      this.winningNumber.includes(number)
    );
    const numberOfCorrectNumbers = correctNumbers.length;

    if (numberOfCorrectNumbers === 5 && this.lottoNumbers.includes(this.bonusNumber)) {
      return OTHERS.bonusNumber;
    }

    return numberOfCorrectNumbers;
  }
}

export default LottoCalculator;
