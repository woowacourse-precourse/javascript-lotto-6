class LotteryPrize {
  calculatePrize(lottoBundle, winningNumbers, bonusNumber) {}

  static getMatchCount([...lottoNumbers], [...winningNumbers]) {
    return lottoNumbers.reduce((matchCount, lottoNumber) => {
      if (winningNumbers.includes(lottoNumber)) {
        return matchCount + 1;
      }
      return matchCount;
    }, 0);
  }

  static IsBonusNumberMatch([...lottoNumbers], bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }
}
export default LotteryPrize;
