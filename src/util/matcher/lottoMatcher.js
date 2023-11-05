import parseToMatchedCount from '../parse/parseToMatchedCount.js';

export default function lottoMatcher(purchase, winningNumber, bonusNumber) {
  const match = purchase.map((element) => parseToMatchedCount(element, winningNumber, bonusNumber));
  return match;
}
