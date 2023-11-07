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

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
  }

  // TODO: 추가 기능 구현
  get info() {
    return `[${this.#numbers.join(', ')}]`;
  }

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
}

export default Lotto;
