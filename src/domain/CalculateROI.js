import { MAGIC_NUMBER } from '../constants/MagicNumber.js';
import { ERROR } from '../constants/Error.js';

export default function ROI(amount, winningNumber) {
  if (amount === 0) throw new Error(ERROR.amountNull);
  const prize = [
    MAGIC_NUMBER.prizeFifth,
    MAGIC_NUMBER.prizeFourth,
    MAGIC_NUMBER.prizeThird,
    MAGIC_NUMBER.prizeSecond,
    MAGIC_NUMBER.prizeFirst,
  ];
  const profit = winningNumber.reduce((acc, value, idx) => {
    return acc + prize[idx] * value;
  }, 0);
  const roi = parseFloat(((profit / amount) * 100).toFixed(1));

  return roi;
}
