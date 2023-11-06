const profitRateCalculator = (profit) => {
  if (Number.isInteger(profit)) return `${profit.toLocaleString()}.0`;
  return Number(profit.toFixed(1)).toLocaleString();
};

export default profitRateCalculator;
