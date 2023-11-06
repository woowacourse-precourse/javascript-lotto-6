class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    } else if (Number.isNaN(Number(numbers))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    } else {
      return true;
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
