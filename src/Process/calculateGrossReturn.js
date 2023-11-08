import calculateTotalPrizeMoney from './calculateTotalPrizeMoney.js';

function calculateGrossReturn(purchaseAmount, statistics) {
  const totalPrizeMoney = calculateTotalPrizeMoney(statistics);

  let grossReturn = String(Math.round((totalPrizeMoney / purchaseAmount) * 100 * 10) / 10);

  if (!grossReturn.includes('.')) {
    grossReturn += '.0';
  }

  return grossReturn;
}

export default calculateGrossReturn;
