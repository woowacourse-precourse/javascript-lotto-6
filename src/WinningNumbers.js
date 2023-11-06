import LottoNumbers from './LottoNumbers.js';

class WinningNumbers extends LottoNumbers {
  constructor(numbers) {
    super(numbers);
  }

  getWinningNumbers() {
    return super.getNumbers();
  }
}

export default WinningNumbers;
