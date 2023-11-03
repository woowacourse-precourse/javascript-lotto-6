class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberCount(numbers);
  }

  // TODO: 추가 기능 구현
  #occurError(errorMessage) {
    throw new Error(errorMessage);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      this.#occurError("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default Lotto;
