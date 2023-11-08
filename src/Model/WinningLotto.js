import OutputView from "../View/OutputView.js";

class WinningLotto {
  constructor() {
    this.outputView = new OutputView();
  }

  calculateNumberOfMatchingNumbers(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
  }

  isBonusNumberMatched(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  determinePrizeCategory(matchCount, isBonusMatched) {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && isBonusMatched) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;

    return 0;
  }

  checkWinning(lottoNumbers, winningNumbers) {
    const winningNums = winningNumbers[0].map(Number);
    const bonusNum = Number(winningNumbers[1]);

    const matchCount = this.calculateNumberOfMatchingNumbers(lottoNumbers, winningNums);
    const isBonusMatched = this.isBonusNumberMatched(lottoNumbers, bonusNum);

    return this.determinePrizeCategory(matchCount, isBonusMatched);
  }

  countAndPrintResult(lottoResult) {
    const counts = {};

    for (let i = 0; i<=5; i+= 1) {
      counts[i] = 0;
    }

    lottoResult.forEach(num => {
      if (num >= 1 && num <= 5) {
        counts[num] += 1;
      }
    });

    this.outputView.printWinningResult(counts);

    return Object.values(counts);
  }
}

export default WinningLotto;