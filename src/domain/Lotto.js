class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // this.#validateNumberCount(numbers);
    // this.#validateNumberRange(numbers);
    // this.#validateNumberDuplicate(numbers);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
      }
    });
  }

  #validateNumberDuplicate(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }
}

export default Lotto;
