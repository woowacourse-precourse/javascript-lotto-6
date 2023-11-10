import AppError from './Contents/AppError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new AppError("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new AppError("[ERROR] 중복된 로또 번호가 존재합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new AppError("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getInformation() {
    return [...this.#numbers].sort((a, b) => a - b);
  }

  checkNumber(Number, bonusNumber) {
    let lottoCount = 0;
    for (const num of this.#numbers) {
      if (Number.includes(num)) lottoCount++;
    }
    const bonusIncluded = this.#numbers.includes(bonusNumber);

    return {
      lottoCount: lottoCount,
      bonusIncluded: bonusIncluded,
    };
  }

}

export default Lotto;