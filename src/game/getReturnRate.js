import { WINNING_PRICE } from '../constants.js';

function getReturnRate(winningLotteriesCount, price) {
  let totalPrice = 0;
  for (let i = 0; i < winningLotteriesCount.length; i += 1) {
    totalPrice += WINNING_PRICE[i] * winningLotteriesCount[i];
  }

  return ((totalPrice / price) * 100).toFixed(1);
}

export default getReturnRate;
