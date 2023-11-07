export default function ROI(amount, winningNumber) {
  const prize = [5000, 50000, 1500000, 30000000, 2000000000];
  const profit = winningNumber.reduce((acc, value, idx) => {
    return acc + prize[idx] * value;
  }, 0);
  const roi = parseFloat(((profit / amount) * 100).toFixed(2));

  return roi;
}
