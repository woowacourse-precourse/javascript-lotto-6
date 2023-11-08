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
}

export default Lotto;
