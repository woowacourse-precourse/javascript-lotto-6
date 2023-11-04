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

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자를 입력할 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현

  get lottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
