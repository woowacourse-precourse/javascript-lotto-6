const calcYieldPercent = (investment, totalIncome) => {
  const yieldPercent = (totalIncome / investment) * 100;

  return parseFloat(yieldPercent.toFixed(2));
};

export default calcYieldPercent;
