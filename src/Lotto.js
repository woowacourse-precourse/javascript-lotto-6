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
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getMatchingResultWithWinningNumbers(winningNumbers) {
    return {
      matchingCountWithWinningNumbers:
        this.getMatchingCountWithWinningNumbers(winningNumbers),
      matchingCountWithBonusNumber:
        this.getMatchingCountWithBonusNumber(winningNumbers),
    };
  }

  getMatchingCountWithWinningNumbers(winningNumbers) {
    let matchingCountWithWinningNumbers = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchingCountWithWinningNumbers += 1;
      }
    });
    return matchingCountWithWinningNumbers;
  }

  getMatchingCountWithBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber) ? 1 : 0;
  }
}

export default Lotto;
