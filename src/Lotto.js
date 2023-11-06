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
  getNumbers() {
    return this.#numbers;
  }

  matchNumbers({ lottoWinningNumbers, bonousNumber }) {
    const lottoWinningNumbersMatchCount = this.#calculateMatchCount(lottoWinningNumbers);
    const bonousNumberMatchCount = this.#calculateMatchCount(bonousNumber);
    return { lottoWinningNumbersMatchCount, bonousNumberMatchCount };
  }

  #calculateMatchCount(matchNumbers) {
    let matchCount = 0;
    matchNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) matchCount++;
    });
    return matchCount;
  }
}

export default Lotto;
