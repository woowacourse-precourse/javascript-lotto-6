const roundAndFormatWithComma = (profit, roundCriteria) => {
  if (Number.isInteger(profit)) return `${profit.toLocaleString()}.0`;
  return Number(profit.toFixed(roundCriteria)).toLocaleString();
};

export default roundAndFormatWithComma;
