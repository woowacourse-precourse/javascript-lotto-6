const statsService = {
  stats: {
    "1등": [6, 0, 2000000000],
    "2등": [15, 0, 30000000],
    "3등": [5, 0, 1500000],
    "4등": [4, 0, 50000],
    "5등": [3, 0, 5000],
  },

  // 2등 개수 파악
  getSecondRank(count) {
    if (count === 15) {
      this.stats["2등"][1]++;
      return count;
    } else return count % 10;
  },

  // 그외 등수의 개수 파악
  getRank(reCount) {
    reCount === 6 ? this.stats["1등"][1]++ : reCount;
    reCount === 5 ? this.stats["3등"][1]++ : reCount;
    reCount === 4 ? this.stats["4등"][1]++ : reCount;
    reCount === 3 ? this.stats["5등"][1]++ : reCount;
    return this.stats;
  },

  // 당첨 금액 계산
  getTotal(stats) {
    let total = 0;
    const values = Object.values(stats);
    values.forEach((value) => {
      total += value[1] * value[2];
    });
    return total;
  },

  // 수익률 계산
  getRate(price, total) {
    const rate = (total / price) * 100;
    return Math.round(rate * 100) / 100;
  },
};

export default statsService;
