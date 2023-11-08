class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortLotto(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
