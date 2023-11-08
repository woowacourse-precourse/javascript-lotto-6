class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.checkDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  checkDuplicate(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.length) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }
  }
}

export default Lotto;
