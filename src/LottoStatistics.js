import { PRIZES } from "../src/constants.js";

class LottoStatistics {
  constructor(lottos, lottoPrice) {
    this.lottos = lottos;
    this.lottoPrice = lottoPrice;
  }

  calculateStatistics(results) {
    const resultCounts = this.countResults(results);
    const totalPrizeMoney = this.calculateTotalPrizeMoney(resultCounts);
    const investment = this.calculateInvestment();
    const roi = this.calculateROI(totalPrizeMoney, investment);

    return {
      resultCounts,
      totalPrizeMoney,
      roi: parseFloat(roi.toFixed(1)),
    };
  }

  calculateInvestment() {
    return this.lottos.length * this.lottoPrice;
  }

  calculateROI(totalPrizeMoney, investment) {
    return (totalPrizeMoney / investment) * 100;
  }

  countResults(results) {
    return results.reduce((countByResult, result) => {
      countByResult[result] = (countByResult[result] || 0) + 1;
      return countByResult;
    }, {});
  }

  calculateTotalPrizeMoney(resultCounts) {
    return Object.keys(resultCounts).reduce((total, prize) => {
      return total + PRIZES[prize] * resultCounts[prize];
    }, 0);
  }
}

export default LottoStatistics;
