class LottoWinnerPrize {
  constructor() {
    this.fifthPrize = { matchedNumbers: 3, prizeMoney: 5000, count: 0 };
    this.fourthPrize = { matchedNumbers: 4, prizeMoney: 50000, count: 0 };
    this.thirdPrize = { matchedNumbers: 5, prizeMoney: 1500000, count: 0 };
    this.secondPrize = {
      matchedNumbers: 5,
      prizeMoney: 30000000,
      count: 0,
      hasBonusNumber: true,
    };
    this.firstPrize = { matchedNumbers: 6, prizeMoney: 2000000000, count: 0 };
  }
}

export default LottoWinnerPrize;
