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

  #numberTypeCheck(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
    });
  }
}

export default Lotto;
