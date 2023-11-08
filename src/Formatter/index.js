import {
  LANG,
  MESSAGE,
  MATCH,
  SYMBOLS,
  REWARD_MESSAGE,
} from '../constants/index.js';

class Formatter {
  static formatStatistics({ first, second, third, fourth, fifth }) {
    return [
      `${MATCH.five}개 일치 (${REWARD_MESSAGE.third}원) ${SYMBOLS.hyphen} ${third}개`,
      `${MATCH.three}개 일치 (${REWARD_MESSAGE.fifth}원) ${SYMBOLS.hyphen} ${fifth}개`,
      `${MATCH.four}개 일치 (${REWARD_MESSAGE.fourth}원) ${SYMBOLS.hyphen} ${fourth}개`,
      `${MATCH.five}개 일치, 보너스 볼 일치 (${REWARD_MESSAGE.second}원) ${SYMBOLS.hyphen} ${second}개`,
      `${MATCH.six}개 일치 (${REWARD_MESSAGE.first}원) ${SYMBOLS.hyphen} ${first}개`,
    ].join(SYMBOLS.lineBreak);
  }

  static formatResult(ranks, revenu) {
    const results = this.formatStatistics(ranks) + SYMBOLS.lineBreak;
    const localRevenue = revenu.toLocaleString(LANG.korea);
    return `${results}${MESSAGE.result}${localRevenue}${SYMBOLS.percent}입니다.`;
  }

  static toNumbers(numbers) {
    return numbers
      .replace(/\s/g, '')
      .split(SYMBOLS.numberDivider)
      .filter(Boolean)
      .map(Number);
  }

  static formatLottos(lottos) {
    return lottos.map((lotto) => lotto.formatString()).join(SYMBOLS.lineBreak);
  }
}

export default Formatter;
