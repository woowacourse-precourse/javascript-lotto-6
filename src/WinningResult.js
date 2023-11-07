class WinningResult {
  constructor() {
    this.prizes = {
      1: { count: 0, prize: 2000000000 },
      2: { count: 0, prize: 30000000 },
      3: { count: 0, prize: 1500000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 5000 },
    };
  }

  // 등수별 당첨 개수 카운트
  updatePrize(rank) {
    this.prizes[rank].count++;
  }

  // 총 상금 계산
  getTotalPrize() {
    let totalPrize = 0;
    for (let rank in this.prizes) {
      totalPrize += this.prizes[rank].count * this.prizes[rank].prize;
    }
    return totalPrize;
  }

  // 등수별 당첨 개수 반환
  getPrizeCount(rank) {
    return this.prizes[rank].count;
  }
}

export default WinningResult;
