import {
  MESSAGE,
  MATCH,
  SYMBOLS,
  REWARD_MESSAGE,
  LANG,
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

  static formatRevenue(revenue) {
    const [integer, decimal] = revenue.split(SYMBOLS.point).map(Number);
    return [integer.toLocaleString(LANG.korea), decimal].join(SYMBOLS.point);
  }

  static formatResult(ranks, revenue) {
    const statistics = this.formatStatistics(ranks) + SYMBOLS.lineBreak;
    const formattedRevenue = this.formatRevenue(revenue);
    return `${statistics}${MESSAGE.result}${formattedRevenue}${SYMBOLS.percent}입니다.`;
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
