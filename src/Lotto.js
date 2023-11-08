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

    const SET_NUMBERS = new Set(numbers);
    if (SET_NUMBERS.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자를 가질 수 없습니다.");
    }

    if (numbers.some((num) => !Number.isInteger(num) || num <= 0 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
    }

    if (numbers.some((num) => typeof num !== "number" || isNaN(num))) {
      throw new Error(
        "[ERROR] 로또 번호에 숫자가 아닌 문자나 공백이 포함되어 있습니다."
      );
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
