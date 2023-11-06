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
  }
  getNumbers() {
    return this.#numbers;
  }

  getMatchingCount(winningNumbers) {
    const MATHING_NUMBERS = winningNumbers.filter((x) =>
      this.#numbers.includes(Number(x))
    );
    return MATHING_NUMBERS.length;
  }
}

export default Lotto;
