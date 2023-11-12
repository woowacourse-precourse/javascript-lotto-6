const calculator = {
  profitRate(totalReturn, totalCost) {
    return ((totalReturn - totalCost) / totalCost) * 100 + 100;
  },
};
export default calculator;
