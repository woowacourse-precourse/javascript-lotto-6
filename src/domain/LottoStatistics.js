import { LOTTO_PRIZE } from '../util/constant/index.js';

class LottoStatistics {
  constructor() {
    this.results = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
      profits: 0,
    };
  }

  trackResult(rank) {
    this.results[rank] += 1;
    this.results.profits += LOTTO_PRIZE[rank];
  }

  countMatchNumber(lottoTicket, winningNumber, bonusNumber) {
    const matchingNumbers = lottoTicket.filter((number) =>
      winningNumber.includes(number),
    );

    console.log(matchingNumbers);
    const isMatchBonus = lottoTicket.includes(bonusNumber);
    return [matchingNumbers.length, isMatchBonus];
  }

  updateResults(matchingNumbersCount, isMatchBonus) {
    switch (matchingNumbersCount) {
      case 6:
        this.trackResult('FIRST');
        break;
      case 5:
        this.trackResult(isMatchBonus ? 'SECOND' : 'THIRD');
        break;
      case 4:
        this.trackResult('FOURTH');
        break;
      case 3:
        this.trackResult('FIFTH');
        break;
    }
  }

  updateProfitRate(purchaseMoney) {
    const profitRateNumber = (this.results.profits / purchaseMoney) * 100;
    const profitRate = Math.round(profitRateNumber * 10) / 10;
    return profitRate.toFixed(1);
  }

  getResults() {
    return this.results;
  }
}

export default LottoStatistics;
