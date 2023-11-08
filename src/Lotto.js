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
  }

  // TODO: 추가 기능 구현

  getLottos() {
    return this.#numbers;
  }
}

export default Lotto;
