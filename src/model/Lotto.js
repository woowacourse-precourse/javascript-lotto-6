class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #sortNumbers(numbers) {
    return numbers.sort((first, second) => first - second);
  }

  getNumberString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
