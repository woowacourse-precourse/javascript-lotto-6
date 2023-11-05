class Lotto {
  #numbers;

  // numbers는 숫자 배열
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.\n');
    }

    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.\n');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.\n');
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이 정수여야 합니다.\n');
    }
  }
}

export default Lotto;
