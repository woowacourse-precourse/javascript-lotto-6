class LottoCalculator {
  static getReturnRate(revenue, expense) {
    const returnRate = ((Number(revenue) / Number(expense)) * 100).toFixed(1);

    return returnRate;
  }
}

export default LottoCalculator;
