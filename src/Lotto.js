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
  compareNumbers(winningNumbers, bonusNumber) {
    const matchedNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    if (this.#numbers.includes(bonusNumber)) {
      return [matchedNumbers.length.toString(), "bonusTrue"];
    } else {
      return [matchedNumbers.length.toString(), "bonusFalse"];
    }
  }
}

export default Lotto;
