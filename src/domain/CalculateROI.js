import { MAGIC_NUMBER } from '../constants/MagicNumber';

export default function ROI(amount, winningNumber) {
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
