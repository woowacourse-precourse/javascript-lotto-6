class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkDuplication(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #checkDuplication(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      for (let j = i + 1; j < numbers.length; j += 1) {
        this.#checkError(numbers[i], numbers[j]);
      }
    }
  }

  #checkError(number1, number2) {
    if (number1 === number2) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
