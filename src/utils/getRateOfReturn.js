import CONSTANTS from '../constants/constants.js';

const getRateOfReturn = (purchaseAmount, returns) => {
  if (returns.length === CONSTANTS.number.zero) return '0%';

  const finalValue =
    Number(purchaseAmount) + returns.reduce((acc, currentReturn) => acc + currentReturn);
  const rateOfReturn = (((finalValue - purchaseAmount) / purchaseAmount) * 100).toFixed(1);

  return `${rateOfReturn}%`;
};

export default getRateOfReturn;
