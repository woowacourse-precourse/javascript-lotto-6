class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }

  compare(winningNumbers, winningBonusNumber) {}
}

export default Lotto;
