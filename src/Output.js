function calculateProfitRate(totalPrize, totalSpent) {
    if (totalSpent === 0) {
      return '0.00%';
    }
  
    const baseProfitRate = 100; // 기본 수익률 (100%)
    const profit = totalPrize - totalSpent;
    const profitRate = ((profit / totalSpent + 1) * baseProfitRate).toFixed(1);
  
    return `${profitRate}%`;
  }