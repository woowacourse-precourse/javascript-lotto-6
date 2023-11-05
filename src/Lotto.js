import LottoNumbers from './LottoNumbers.js';

class Lotto extends LottoNumbers {
  #numbers;

  constructor(numbers) {
    super(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
