import LottoNumbers from './LottoNumbers.js';

class WinningNumbers extends LottoNumbers {
  #winningNumbers;

  constructor(winningNumbers) {
    super(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }
}

export default WinningNumbers;
