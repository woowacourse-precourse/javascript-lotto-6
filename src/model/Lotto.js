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
        throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
      }
    });
  }

  #numberLengthCheck(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #numberRangeCheck(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
      }
    });
  }

  #numberDuplicateCheck(numbers) {
    const duplicateChecker = new Set(numbers);
    if (duplicateChecker.size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }
}

export default Lotto;
