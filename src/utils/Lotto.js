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
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복된 수가 없어야 합니다.");
    }
    if (!numbers.every(this.isValidNumber) || !this.isIntegers(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
    }
  }

  isValidNumber(number) {
    return !isNaN(number) && number >= 1 && number <= 45;
  }

  // TODO: 추가 기능 구현

  getLottos() {
    return this.#numbers;
  }

  isIntegers(numbers) {
    return numbers.every((number) => Number.isInteger(number));
  }
}

export default Lotto;
