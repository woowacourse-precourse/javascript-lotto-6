export default function parseToMatchedCount(purchase, winningNumber, bonusNumber) {
  const match = new Set([...purchase, ...winningNumber]);
  const matchedNumbers = match.size - winningNumber.length;
  const isSecond = match.size === 7 && match.has(bonusNumber);
  const isThird = match.size === 7 && !match.has(bonusNumber);

  if (isSecond) {
    return 1;
  }

  if (isThird) {
    return 2;
  }

  return matchedNumbers;
}
