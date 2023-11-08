class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size < 6) {
      throw new Error('[ERROR] 로또 번호가 중복됩니다.');
    }
  }

  // TODO: 추가 기능 구현
  numbersValueResult() {
    return this.#numbers;
  }

  sortNumbers(numbers) {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
