class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    try {
      this.#validate(numbers);
      this.#numbers = numbers;
    } catch (error) {
      throw error;
    }
  }

  getLottoNumber() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validate(numbers) {
    this.#numberTypeCheck(numbers);
    this.#numberLengthCheck(numbers);
    this.#numberRangeCheck(numbers);
    this.#numberDuplicateCheck(numbers);
  }
}

export default Lotto;
