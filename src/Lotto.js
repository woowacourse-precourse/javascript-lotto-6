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

    const UNIQUE_NUMBERS = new Set(numbers);

    if (UNIQUE_NUMBERS.size !== numbers.length) {
      throw new Error('[ERROR] 숫자가 중복됩니다.');
    }
  }

  // TODO: 추가 기능 구현

  get lottoNumbers() {
    return this.#numbers;
  }

  getResultForEachLotto(bonusNumber, winningNumber) {
    const LOTTO_CALCULATOR = new LottoCalculator(this.lottoNumbers, bonusNumber, winningNumber);
    return LOTTO_CALCULATOR.calculate();
  }
}

export default Lotto;
