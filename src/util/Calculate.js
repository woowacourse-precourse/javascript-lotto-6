import { MATCH_NUMBER } from '../constants/constant.js';

class Calculate {
  /**
   * 각 복권 별 당첨 번호, 보너스 번호 일치 개수를 확인합니다.
   * @param {number[]} lottoList
   * @param {number[]} lotto
   * @param {number} bonus
   * @returns
   */
  static calculateMatch(lottoList, lotto, bonus) {
    let matchCount = 0;
    let bonusMatch = 0;

    if (lottoList.includes(bonus)) bonusMatch += 1;
    for (let i = 0; i < lotto.length; i += 1) {
      if (lottoList.includes(lotto[i])) matchCount += 1;
    }

    return { matchCount, bonusMatch };
  }

  /**
   * 당첨 총 금액을 구합니다.
   * @param {{ three: number, four: number, five: number, fiveAndBonus: number, six: number }} match
   * @return {number} total
   */
  static calculateTotal(match) {
    const keys = Object.keys(match);
    let total = 0;
    keys.forEach((key) => {
      total += MATCH_NUMBER[key] * match[key];
    });
    return total;
  }

  /**
   * 수익률을 계산 해서 반환합니다.
   * @param {number} total
   * @param {number} money
   * @returns {number} rate
   */
  static calcultePercent(total, money) {
    return (total / money) * 100;
  }

  /**
   * 각 로또별 일치 여부를 확인하고 카운트
   * @param {number} matchCount
   * @param {number} bonusCount
   * @param {{ three: number, four: number, five: number, fiveAndBonus: number, six: number }} match
   */
  static checkMatch(matchCount, bonusCount, match) {
    if (matchCount === 3) match.three += 1;
    if (matchCount === 4) match.four += 1;
    if (matchCount === 5 && bonusCount === 0) match.five += 1;
    if (matchCount === 5 && bonusCount === 1) match.fiveAndBonus += 1;
    if (matchCount === 6) match.six += 1;
  }
}

export default Calculate;
