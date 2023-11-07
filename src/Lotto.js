class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if (numbersSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 서로다른 숫자여야 합니다.');
    }

    if (!numbers.every((number) => Number.isInteger(number))) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    }

    return;
  }

  checkSameNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  numberComparison(lottoNumber, bonusNumber) {
    const result = lottoNumber.reduce((count, number) => {
      if (this.#numbers.includes(number)) {
        count += 1;
      }

      return count;
    }, 0);

    return this.resultnumberComparison(result, lottoNumber, bonusNumber);
  }

  resultnumberComparison(result, lottoNumber, bonusNumber) {
    if (result === 6) return 'six';
    if (result === 5 && lottoNumber.includes(bonusNumber)) return 'fiveAndBonus';
    if (result === 5) return 'five';
    if (result === 4) return 'four';
    if (result === 3) return 'three';

    return;
  }
}

export default Lotto;
