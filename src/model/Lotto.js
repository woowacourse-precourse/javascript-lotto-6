class Lotto {
  #numbers;

  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
