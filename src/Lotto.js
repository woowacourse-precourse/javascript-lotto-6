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

    if (!numbers.every(Number.isInteger)) {
      throw new Error("[ERROR] 로또 번호는 정수만 가능합니다.");
    }

    if (!numbers.every((number) => /^([1-9]|[1-3][0-9]|4[0-5])$/.test(number))) {
      throw new Error("[ERROR] 1~45 범위가 아닌 번호가 존재합니다.");
    }

    const setNumbers = [...new Set(numbers)];
    if (setNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

  }

}

export default Lotto;
