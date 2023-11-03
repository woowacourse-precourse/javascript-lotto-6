import OPTIONS from '../../constants/options.js';

const isValidAmount = amount =>
  !Number.isNaN(amount / OPTIONS.baseAmount) && !(amount % OPTIONS.baseAmount);

export default isValidAmount;
