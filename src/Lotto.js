class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.filter((number) => number > 45 && number < 1).length > 0) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if ((new Set(numbers)).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 유일한 숫자여야 합니다.');
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  numbers() {
    return this.#numbers;
  }
}

export default Lotto;