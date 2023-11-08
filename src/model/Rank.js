class Rank {
  constructor(prize, requiredCount, isRequiredBonus) {
    this.prize = prize;
    this.requiredCount = requiredCount;
    this.isRequiredBonus = isRequiredBonus;
  }

  static LIST = [
    new Rank(5000, 3, false),
    new Rank(50000, 4, false),
    new Rank(1500000, 5, false),
    new Rank(30000000, 5, true),
    new Rank(2000000000, 6, false),
  ];

  isWinnable(lottoResult) {
    return (
      lottoResult.getMatchingCount() === this.requiredCount &&
      lottoResult.getIncludesBonus() === this.isRequiredBonus
    );
  }
}

export default Rank;
