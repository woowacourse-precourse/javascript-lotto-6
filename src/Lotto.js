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

    const uniqueNumbers = new Set (numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 있을 수 없습니다.")
    }
  }

  get numbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
