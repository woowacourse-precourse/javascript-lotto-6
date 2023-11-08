class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicationNumber(numbers);
    this.#validateNumberRange(numbers)
    this.#numbers = numbers;
    this.resultGrade = 0;
    this.resultBonusNumberResult = false;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] : 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicationNumber(numbers) {
    const seen = {};

    for (const item of numbers) {
      if (seen[item]) {
        throw new Error("[ERROR] : 중복된 수 없이 입력해주세요");
      }
      seen[item] = true;
    }
  }

  #validateNumberRange(numbers) {
    for (const item of numbers) {
      if ((numbers[item] > 45) || (numbers[item] < 1)) {
        throw new Error("[ERROR] 입력번호는 1~45 사이 수여야 합니다.");
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getResultGrade() {
    return this.resultGrade;
  }

  getResultBonusNumber() {
    return this.resultBonusNumberResult;
  }

  setNumbers(numbers) {
    this.#numbers = numbers;
  }

  setResultGrade(grade) {
    this.resultGrade = grade;
  }

  setResultBonusNumber(result) {
    this.resultBonusNumberResult = result;
  }

}

export default Lotto;
