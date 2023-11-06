export default function parseToMatchedCount(purchase, winningNumber, bonusNumber) {
  const combinedArray = [...purchase, ...winningNumber];
  const match = new Set(combinedArray);
  let matchedNumbers = match.size - winningNumber.length;

  if (matchedNumbers === 0) {
    return 0;
  }

  if (matchedNumbers === 1 && match.has(bonusNumber)) {
    return 1;
  }

  matchedNumbers += 1;

  return matchedNumbers;
}
