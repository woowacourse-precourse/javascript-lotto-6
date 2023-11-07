function calculateReturn(results, purchaseAmount) {
  const totalReturn = (
    results[3] * 5000 +
    results[4] * 50000 +
    results[5] * 1500000 +
    results[5.5] * 30000000 +
    results[6] * 2000000000
  );

    const returnRate = (totalReturn / purchaseAmount) * 100;

    // 소수 둘째 자리에서 반올림
    const roundedReturnRate = Math.round(returnRate * 100) / 100;

    return roundedReturnRate;
}

module.exports = calculateReturn;