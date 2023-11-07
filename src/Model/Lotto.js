class Lotto {
  #numbers;
  #count;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
