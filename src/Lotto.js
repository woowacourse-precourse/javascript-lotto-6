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

    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    if (
      !numbers.every(
        (number) => Number.isInteger(number) && number > 0 && number <= 45,
      )
    ) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이 정수여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
