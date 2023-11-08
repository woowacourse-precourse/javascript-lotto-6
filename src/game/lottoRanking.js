const lottoRanking = {
  FIRST: { PRICE: 2000000000, count: 0 },
  SECOND: { PRICE: 30000000, count: 0 },
  THIRD: { PRICE: 1500000, count: 0 },
  FOURTH: { PRICE: 50000, count: 0 },
  FIFTH: { PRICE: 5000, count: 0 },

  initializeRanking() {
    this.FIRST.count = 0;
    this.SECOND.count = 0;
    this.THIRD.count = 0;
    this.FOURTH.count = 0;
    this.FIFTH.count = 0;
  },

  calculateTotalPrice() {
    const totalAmount =
      this.FIRST.count * this.FIRST.PRICE +
      this.SECOND.count * this.SECOND.PRICE +
      this.THIRD.count * this.THIRD.PRICE +
      this.FOURTH.count * this.FOURTH.PRICE +
      this.FIFTH.count * this.FIFTH.PRICE;

    return totalAmount;
  },
};

export default lottoRanking;
