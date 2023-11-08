class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkForDuplicates(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #checkForDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않습니다.");
    }
  }
}

export default Lotto;
