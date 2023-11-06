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

  // TODO: 추가 기능 구현
  getWinningInfo(winningNumbers, bonusNumber) {
    let matchCount = 0;
    let isBonusMatched = false;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchCount += 1;
      } else if (number === bonusNumber) {
        isBonusMatched = true;
      }
    });

    return { matchCount, isBonusMatched };
  }

  printNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
