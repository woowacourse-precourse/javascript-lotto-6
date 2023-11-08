import LottoResult from './LottoResult.js';

/**
 * @classdesc 당첨 번호를 담당하는 클래스
 */
class WinningNumbers {
  main = [];

  bonus = 0;

  /**
   * @param {number[]} main
   * @param {number} bonus
   */
  constructor(main, bonus) {
    this.main = main;
    this.bonus = bonus;
  }

  /**
   * @param {Lotto} lotto
   * @returns {LottoResult} 로또 결과
   */
  check(lotto) {
    const mainMatchCount = lotto.countMatchingNumbers(this.main);
    const isBonusMatched = lotto.countMatchingNumbers([this.bonus]) > 0;

    return new LottoResult({ mainMatchCount, isBonusMatched });
  }
}

export default WinningNumbers;
