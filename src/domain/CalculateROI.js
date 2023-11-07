import { MagicNumber } from '../constants/MagicNumber';

export default function ROI(amount, winningNumber) {
  const prize = [
    MagicNumber.prizeFifth,
    MagicNumber.prizeFourth,
    MagicNumber.prizeThird,
    MagicNumber.prizeSecond,
    MagicNumber.prizeFirst,
  ];
  const profit = winningNumber.reduce((acc, value, idx) => {
    return acc + prize[idx] * value;
  }, 0);
  const roi = parseFloat(((profit / amount) * 100).toFixed(1));

  return roi;
}
