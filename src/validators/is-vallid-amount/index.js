import OPTIONS from '../../constants/options.js';

const isValidAmount = amount => {
  const numericAmount = parseFloat(amount);

  return Number.isNaN(numericAmount) || numericAmount % OPTIONS.baseAmount;
};

export default isValidAmount;
