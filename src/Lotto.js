class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호는 중복되지 말아야 합니다.');
    }
    if (!numbers.every(number => number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 로또 번호의 범위는 1부터 45이어야 합니다.')
    }
  }

  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
