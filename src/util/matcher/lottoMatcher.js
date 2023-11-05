import parseToMatchedCount from '../parse/parseToMatchedCount.js';

export default function lottoMatcher(puchases, winningNumber, bonusNumber) {
  const match = puchases.map((element) => parseToMatchedCount(element, winningNumber, bonusNumber));

  return match;
}
