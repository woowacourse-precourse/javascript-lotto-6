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

    if (this.#hasDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.");
    }
  }

  #hasDuplicate(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  getWinningResult(winningNumbers, bonusNumber) {
    const matchedNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    const isBonusMatched = this.#numbers.includes(bonusNumber);
    return {
      matchCount: matchedNumbers.length,
      isBonusMatched,
    };
  }
}

export default Lotto;
