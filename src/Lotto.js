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
    for (const number of numbers) {
      if (isNaN(number)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 1 ~ 45까지의 숫자만 입력 가능합니다.');
      }
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 번호를 입력하셨습니다.');
    }
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
