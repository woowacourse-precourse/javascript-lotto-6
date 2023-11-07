import LottoCalculator from './LottoCalculator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const UNIQUE_NUMBER_SET = new Set(numbers);

    if (UNIQUE_NUMBER_SET.size !== numbers.length) {
      throw new Error('[ERROR] 숫자가 중복됩니다.');
    }
  }

  // TODO: 추가 기능 구현

  get lotto() {
    return this.#numbers;
  }

  getResultPerLotto(bonusNumber, winningNumbers) {
    const LOTTO_CALCULATOR = new LottoCalculator(this.lotto, bonusNumber, winningNumbers);
    return LOTTO_CALCULATOR.calculate();
  }
}

export default Lotto;
