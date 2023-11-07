class Result {
  static getWinningResult(resultArray) {
    this.winningThird = resultArray.filter(x => x != 0 && x % 3 == 0).length;
    this.winningForth = resultArray.filter(x => x != 0 && x % 4 == 0).length;
    this.winningSix = resultArray.filter(x => x != 0 && x % 6 == 0).length;
  }
  static calculateWinningMoney(winningInFive) {
    const winThird = 5000 * this.winningThird;
    const winForth = 50000 * this.winningForth;
    const winFive = 1500000 * winningInFive[0];
    const winBonus = 30000000* winningInFive[1];
    const winSix = 2000000000 * this.winningSix;
    const winMoney = winThird + winForth + winFive + winBonus + winSix;
    return winMoney;
  }
}