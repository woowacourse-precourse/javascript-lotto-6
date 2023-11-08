export const calculateRateOfReturn = (revenue, payout) =>
  (revenue / payout) * 100;

export const roundRateOfReturn = (rate) => Math.round(rate * 10) / 10;
