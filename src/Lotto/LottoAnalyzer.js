export const LottoAnalyzer = class {
  static getAnalysis(winningNumbers, bonusNumber, lottoNums) {
    const matchCount = lottoNums.filter((num) => winningNumbers.includes(num)).length;
    const isBonusMatched = lottoNums.includes(bonusNumber);
    return LottoAnalyzer.getRank(matchCount, isBonusMatched);
  }

  static getRank(matchCount, isBonusMatched) {
    if (matchCount < 3) return 0;
    if (matchCount === 3) return 5;
    if (matchCount === 4) return 4;
    if (matchCount === 5) return isBonusMatched ? 2 : 3;
    if (matchCount === 6) return 1;
    return 0;
  }

  static toFixedNumber(number) {
    return +number.toFixed(1);
  }
};

export default LottoAnalyzer;
