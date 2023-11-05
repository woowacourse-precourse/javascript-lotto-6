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
  }

  #sortNumber(validNumbers) {
    this.#numbers = validNumbers.sort((first, second) => first - second);
    return this.#numbers;
  }

  getNumber() {
    return this.#sortNumber(this.#numbers);
  }
}

export default Lotto;
