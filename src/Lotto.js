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
  }

  getLottoNumbers() {
    return this.#numbers;
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

  getMatchingCountWithWinningNumbers(bonusNumber) {
    return this.#numbers.includes(bonusNumber) ? 1 : 0;
  }
}

export default Lotto;
