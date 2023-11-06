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
    if (numbers.lenght != new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되서는 안됩니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
