class Compare {
  sameNumber = {
    fifthPlace: { sameCount: 0, winningMoney: 5000 },
    fourthPlace: { sameCount: 0, winningMoney: 50000 },
    thirdPlace: { sameCount: 0, winningMoney: 1500000 },
    secondPlace: { sameCount: 0, winningMoney: 30000000 },
    firstPlace: { sameCount: 0, winningMoney: 2000000000 },
  };

  totalWinningMoney;

  constructor(lotto, winningNumber, bonusNumber) {
    this.lotto = lotto;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
  }

  compareNumber() {
    this.lotto.forEach((lottoElement) => {
      const winningCounting = this.includesWinningNumber(lottoElement);
      const bonusCounting = this.includesBonusNumber(lottoElement);

      if (winningCounting === 3) {
        this.sameNumber.fifthPlace.sameCount += 1;
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
    this.sumWinningMoney(resultLotto);

    const ror = (this.totalWinningMoney / expense) * 100;
    const refineRor = Compare.commaAfterRounding(ror);

    return refineRor;
  }

  sumWinningMoney(resultLotto) {
    const winningMoneyArray = [];
    let sum;

    Object.values(resultLotto).map((values) =>
      winningMoneyArray.push(values.sameCount * values.winningMoney),
    );

    this.totalWinningMoney = winningMoneyArray.reduce((arr, n) => {
      sum = arr + n;
      return sum;
    });
    return sum;
  }

  static commaAfterRounding(ror) {
    return Number(ror.toFixed(1)).toLocaleString();
  }
}
export default Compare;
