class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateSixLength(numbers);
    this.#validateDuplicated(numbers);
    this.#validateRangeNumber(numbers);
    this.#validateNumberType(numbers);
  }

  #validateSixLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
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

  #validateNumberType(numbers) {
    const regex = /^[0-9]+$/;

    if (!numbers.every((number) => regex.test(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자 형태로 입력해주세요');
    }
  }

  getAscendingNumber() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
