const PRIZES = {
  6: 2000000000,
  "5+1": 30000000,
  5: 1500000,
  4: 50000,
  3: 5000,
  꽝: 0,
};

class LottoStatistics {
  constructor(lottos, lottoPrice) {
    this.lottos = lottos;
    this.lottoPrice = lottoPrice;
  }

  calculateStatistics(results) {
    const resultCounts = this.countResults(results);
    const totalPrizeMoney = this.calculateTotalPrizeMoney(resultCounts);
    const investment = this.lottos.length * this.lottoPrice;
    const roi = (totalPrizeMoney / investment) * 100;

    return {
      resultCounts,
      totalPrizeMoney,
      roi: roi.toFixed(1),
    };
  }

  countResults(results) {
    return results.reduce((countByResult, result) => {
      countByResult[result] = (countByResult[result] || 0) + 1;
      return countByResult;
    }, {});
  }

  calculateTotalPrizeMoney(resultCounts) {
    let totalPrizeMoney = 0;
    Object.keys(resultCounts).forEach((prize) => {
      if (PRIZES.hasOwnProperty(prize)) {
        totalPrizeMoney += PRIZES[prize] * resultCounts[prize];
      }
    });
    return totalPrizeMoney;
  }
}

export default LottoStatistics;
