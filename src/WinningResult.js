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

  updatePrize(rank) {
    this.prizes[rank].count++;
  }

  getTotalPrize() {
    let totalPrize = 0;
    for (let rank in this.prizes) {
      totalPrize += this.prizes[rank].count * this.prizes[rank].prize;
    }
    return totalPrize;
  }

  getPrizeCount(rank) {
    return this.prizes[rank].count;
  }
}
