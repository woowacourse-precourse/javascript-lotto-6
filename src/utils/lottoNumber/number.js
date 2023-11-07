import { LOTTO_PRICE } from '../../constants/constants.js';

const lottoPurchaseCount = inputPrice => {
  return Math.floor(parseInt(inputPrice, 10) / LOTTO_PRICE);
};

export { lottoPurchaseCount };
