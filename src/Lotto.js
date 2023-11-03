class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /*
  🤔당첨번호와 중복여부도 판단해야하는지?
  */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨번호를 6자리 이하로 입력해주세요.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다. 다시 입력해주세요.');
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 1부터 45사이의 숫자를 입력해주세요.');
    }
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
