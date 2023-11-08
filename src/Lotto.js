class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않은 6개여야 합니다.');
    }
    uniqueNumbers.forEach((number) => {
      if (!(number >= 1 && number <= 45)) {
        throw new Error('[ERROR] 로또 번호는 1 이상 45 이하여야 합니다.');
      }
    });
  }

  get winningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
