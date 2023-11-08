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
  }

  // TODO: 추가 기능 구현
  // 일치하는 숫자 갯수 반환
  getMatchCount(numbers) {
    return numbers.filter(n => this.#numbers.includes(n)).length;
  }

  // 포함 여부 반환
  getBonusNumberIsInclude(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  toString() {
    return "[" + this.#numbers.join(", ") + "]";
  }
}

export default Lotto;
