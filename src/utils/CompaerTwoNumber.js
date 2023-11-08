class CompareTwoNumber {
  static getMatchCount(lottoNumber, winningNumber) {
    return lottoNumber.reduce((count, number) => {
      return count + (winningNumber.includes(number) ? 1 : 0);
    }, 0);
  }

  static getPlace(lottoNumber, winningNumber, bonusNumber) {
    const matchCount = this.getMatchCount(lottoNumber, winningNumber);
    const bonusMatch = lottoNumber.includes(bonusNumber);

    if (matchCount === lottoNumber.firstPlaceCount) return 1;
    if (matchCount === lottoNumber.secondPlaceCount && bonusMatch) return 2;
    if ((matchCount === lottoNumber.thirdPlaceCount) && !bonusMatch) return 3;
    if (matchCount === lottoNumber.fourthPlaceCount) return 4;
    if (matchCount === lottoNumber.fifthPlaceCount) return 5;

    return null;
  }

  static calculateEarningRatio(purchaseAmount, lottoResult) {
    let totalEarning = 0;
    totalEarning += lottoResult.firstPlaceCount * lottoNumber.firstPlacePrice;
    totalEarning += lottoResult.secondPlaceCount * lottoNumber.secondPlacePrice;
    totalEarning += lottoResult.thirdPlaceCount * lottoNumber.thirdPlacePrice;
    totalEarning += lottoResult.fourthPlaceCount * lottoNumber.fourthPlacePrice;
    totalEarning += lottoResult.fifthPlaceCount * lottoNumber.fifthPlacePrice;
    return ((totalEarning / purchaseAmount) * 100).toFixed(1);
  }
}

export default CompareTwoNumber;
