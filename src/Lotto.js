class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    // 중복된 숫자가 있는지 체크하는 로직 작성
  }

  getNumber() {
    return this.#numbers;
  }

  findMatchingNumbers(winningNumbers) {
    return this.#numbers.filter(num => winningNumbers.includes(num));
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
