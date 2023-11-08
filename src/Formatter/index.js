import { LANG, MESSAGE, RESULT, SYMBOLS } from '../constants/index.js';

class Formatter {
  static formatResult(ranks, revenu) {
    const results = Object.entries(ranks)
      .map(([rank, value]) => `${RESULT[rank]}${value}개${SYMBOLS.lineBreak}`)
      .join('');
    const localRevenue = revenu.toLocaleString(LANG.korea);
    return `${MESSAGE.winningStatistics}${SYMBOLS.boundary}${results}${MESSAGE.result}${localRevenue}${SYMBOLS.percent}입니다.`;
  }

  static toNumbers(numbers) {
    return numbers
      .replace(/\s/g, '')
      .split(SYMBOLS.numberDivider)
      .filter(Boolean)
      .map(Number);
  }

  static formatLottos(lottos) {
    const lottoStrings = lottos
      .map((lotto) => lotto.formatString())
      .join(SYMBOLS.lineBreak);
    return `${SYMBOLS.lineBreak}${lottos.length}${MESSAGE.purchase}${lottoStrings}`;
  }
}

export default Formatter;
