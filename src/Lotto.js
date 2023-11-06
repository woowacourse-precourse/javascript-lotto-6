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
  }

  checkSameNumber(parsedBonusNumber) {
    return this.#numbers.includes(parsedBonusNumber);
  }
}

export default Lotto;
