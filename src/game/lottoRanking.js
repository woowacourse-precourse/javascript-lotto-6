const lottoRanking = {
  FIRST: { price: 2000000000, count: 0 },
  SECOND: { price: 30000000, count: 0 },
  THIRD: { price: 1500000, count: 0 },
  FOURTH: { price: 50000, count: 0 },
  FIFTH: { price: 5000, count: 0 },

  initializeRanking() {
    this.FIRST.count = 0;
    this.SECOND.count = 0;
    this.THIRD.count = 0;
    this.FOURTH.count = 0;
    this.FIFTH.count = 0;
  },

  calculateTotalPrice() {
    const totalAmount = 
      this.FIRST.count * this.FIRST.price +
      this.SECOND.count * this.SECOND.price +
      this.THIRD.count * this.THIRD.price +
      this.FOURTH.count * this.FOURTH.price +
      this.FIFTH.count * this.FIFTH.price;
    return totalAmount;
  }
};

export default lottoRanking;