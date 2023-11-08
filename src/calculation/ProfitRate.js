class ProfitRate {
  static calculate(cost, profit) {
    const profitRate = (profit / cost) * 100;
    const parts = profitRate.toFixed(1).toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}

export default ProfitRate;
