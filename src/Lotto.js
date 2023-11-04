class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDigit(numbers);
    this.#validateRange(numbers);
    this.#validateDuplication(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplication(numbers) {
    numbers.forEach((number, idx) => {
      if (idx !== numbers.lastIndexOf(number)) {
        throw new Error("[ERROR] 로또 번호가 중복되었습니다.");
      }
    });
  }

  #validateRange(numbers) {
    const abnormalRange = numbers.some((number) => number < 1 || number > 45);

    if (abnormalRange) {
      throw new Error("[ERROR] 로또 번호가 중복되었습니다.");
    }
  }

  #validateDigit(numbers) {
    const DIGIT_CHECK = /^[0-9]+$/;

    const isDigit = numbers.every((number) => DIGIT_CHECK.test(number));
    if (!isDigit) {
      throw new Error("[ERROR] 숫자가 아닌 문자가 있습니다.");
    }
  }

  // TODO: 추가 기능 구현
  get lottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
