class Compare {
  sameNumber = {
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    fourthPlace: 0,
    fivePlace: 0,
  };

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
        this.sameNumber.fivePlace += 1;
      }

      if (winningCounting === 4) {
        this.sameNumber.fourthPlace += 1;
      }

      if (winningCounting === 5 && bonusCounting !== 1) {
        this.sameNumber.thirdPlace += 1;
      }

      if (winningCounting === 5 && bonusCounting === 1) {
        this.sameNumber.secondPlace += 1;
      }

      if (winningCounting === 6) {
        this.sameNumber.firstPlace += 1;
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
}
export default Compare;
