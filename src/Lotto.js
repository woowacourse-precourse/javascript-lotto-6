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
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  sortNumbers(num) {
    return num.sort((a, b) => a - b);
  }
  getNumbers() {
    return this.sortNumbers(this.#numbers);
  }
  toString() {
    return this.getNumbers().join(", ");
  }
  getResult(winningNumbers) {
    const bonusNumber = winningNumbers[6];
    const winningNumber = winningNumbers.slice(0, 6);
    const matchCount = this.#numbers.filter((num) =>
      winningNumber.includes(num)
    ).length;
    const isBonusNumberMatch = this.#numbers.includes(bonusNumber);
    return { matchCount, isBonusNumberMatch };
  }
}

export default Lotto;
