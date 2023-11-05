class Result {
  #result = {
    three: 0,
    four: 0,
    five: 0,
    fiveBonus: 0,
    six: 0,
  };

  constructor(winningNumberList, userWinningNumbers, userBonusNumber) {
    this.winningNumberList = winningNumberList;
    this.userWinningNumbers = userWinningNumbers;
    this.bonusNumber = userBonusNumber;
  }

  getResult() {
    this.winningNumberList.forEach((winningNumbers) => {
      const matchingNumbers = winningNumbers.filter((number) =>
        this.userWinningNumbers.includes(number)
      );

      const isBonusNumber = winningNumbers.includes(this.bonusNumber);
      this.compare(matchingNumbers, isBonusNumber);
    });

    return this.#result;
  }

  compare(matchingNumbers, isBonusNumber) {
    const length = matchingNumbers.length;

    if (length === 3) return this.#result.three++;
    else if (length === 4) return this.#result.four++;
    else if (length === 5) {
      if (isBonusNumber) return this.#result.fiveBonus++;
      return this.#result.five++;
    } else if (length === 6) return this.#result.six++;
  }
}

export default Result;
