class Compare {
  sameNumber = {
    firstPlace: { sameCount: 0, winningMoney: 2000000000 },
    secondPlace: { sameCount: 0, winningMoney: 30000000 },
    thirdPlace: { sameCount: 0, winningMoney: 1500000 },
    fourthPlace: { sameCount: 0, winningMoney: 50000 },
    fivePlace: { sameCount: 0, winningMoney: 5000 },
  };

  expense;

  constructor(lotto, winningNumber, bonusNumber) {
    this.lotto = lotto;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
  }

  compareLotto() {
    this.lotto.forEach((lottoElement) => {
      const winningCounting = this.includesWinningNumber(lottoElement);
      const bonusCounting = this.includesBonusNumber(lottoElement);

      if (winningCounting === 3) {
        this.sameNumber.fivePlace.sameCount += 1;
      }

      if (winningCounting === 4) {
        this.sameNumber.fourthPlace.sameCount += 1;
      }

      if (winningCounting === 5 && bonusCounting !== 1) {
        this.sameNumber.thirdPlace.sameCount += 1;
      }

      if (winningCounting === 5 && bonusCounting === 1) {
        this.sameNumber.secondPlace.sameCount += 1;
      }

      if (winningCounting === 6) {
        this.sameNumber.firstPlace.sameCount += 1;
      }
    });

    return this.sameNumber;
  }

  includesWinningNumber(lottoElement) {
    let counting = 0;

    lottoElement.forEach((numberElement) => {
      if (this.winningNumber.includes(numberElement)) {
        counting += 1;
      }
    });

    return counting;
  }

  includesBonusNumber(lottoElement) {
    let counting = 0;

    if (lottoElement.includes(this.bonusNumber)) {
      counting += 1;
    }

    return counting;
  }

  RateOfReturn(resultLotto, expense) {
    this.expense = Number(expense);
    const winningMoneyArray = [];

    Object.values(resultLotto).map((values) =>
      winningMoneyArray.push(values.sameCount * values.winningMoney),
    );

    const totalWinningMoney = winningMoneyArray.reduce((arr, n) => {
      const sum = arr + n;

      return sum;
    });

    const ror = (totalWinningMoney / this.expense) * 100;
    const refineRor = Number(ror.toFixed(1)).toLocaleString();

    return refineRor;
  }
}
export default Compare;
