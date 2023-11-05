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
}
export default LotteryPrize;
