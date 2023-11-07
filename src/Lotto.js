class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== SIX_NUMBERS) {
      throw new Error(NOT_SIX_NUMBER_LENGTH_ERROR_MESSAGE);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
