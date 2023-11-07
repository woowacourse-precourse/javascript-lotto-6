import { MESSAGE, RESULT, SYMBOLS } from '../constants/index.js';

class Formatter {
  static formatResult(ranks, revenu) {
    const results = Object.entries(ranks)
      .map(([rank, value]) => `${RESULT[rank]}${value}개${SYMBOLS.lineBreak}`)
      .join('');
    return `${MESSAGE.winningStatistics}${SYMBOLS.boundary}${results}${MESSAGE.result}${revenu}${SYMBOLS.percent}입니다.`;
  }

  static formatInputNumbers(numbers) {
    return numbers
      .replace(/\s/g, '')
      .split(SYMBOLS.numberDivider)
      .filter(Boolean);
  }
}

export default Formatter;
