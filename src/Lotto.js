class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
    this.numberValidate(numbers);
  }

  numberValidate(numbers) {
    for (let i = 0; i < 6; i++) {
      if (numbers[i] > 45) {
        throw new Error("[ERROR] 1~45 사이의 값을 입력해주세요. ");
      }
      else if (numbers[i] <= 0) {
        throw new Error("[ERROR] 1~45 사이의 값을 입력해주세요. ");
      }
    }
  }

  getValidate() {
    return this.#validate;
  }
}

export default Lotto;
