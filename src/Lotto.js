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

    this.#validateDuplicated(numbers);
    this.#validateRangeNumber(numbers);
  }

  #validateDuplicated(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호가 중복되면 안됩니다.');
    }
  }

  #validateRangeNumber(numbers) {
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 로또 번호 1~45사이의 숫자여야 합니다.');
    }
  }
}

export default Lotto;
