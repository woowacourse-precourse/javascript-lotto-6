import OPTIONS from '../constants/options.js';
import { INDEX_TABLE, RANK } from '../constants/rank.js';
import caculateProfitRate from '../utils/calculateProfitRate.js';

class Statistics {
  #userLottos;

  #winningNumbers;

  #bonusNumber;

  #ranks;

  #hits;

  #stats = Array.from({ length: OPTIONS.totalRank }).fill(0);

  /**
   * 유저가 구매한 로또, 당첨 번호, 보너스 번호를 비교하여 당첨 등수를 얻는다.
   * @param {number[][]} userLottos
   * @param {number[]} winningNunbers
   * @param {number} bonusNumber
   */
  constructor(userLottos, winningNunbers, bonusNumber) {
    this.#userLottos = userLottos;
    this.#winningNumbers = winningNunbers;
    this.#bonusNumber = bonusNumber;
    this.#setRank();
  }

  #setRank() {
    this.#ranks = this.#userLottos.map(userLotto => this.#getRank(userLotto));
  }

  /**
   * 유저가 구입한 로또 번호를 비교하여 일치한 숫자에 따라 등수를 나타내는 string 반환
   * @param {number[]} userLotto
   * @returns {string}
   */
  #getRank(userLotto) {
    this.#hits = this.#winningNumbers.filter(winningNumber =>
      userLotto.includes(winningNumber),
    );

    return this.#isSecond(userLotto) ? RANK.second : RANK[this.#hits.length];
  }

  /**
   * 5개의 당첨 번호에 적중한 경우, 보너스 번호와 비교하여 2등 여부를 판별
   * @param {number[]} userLotto
   * @returns {boolean}
   */
  #isSecond(userLotto) {
    return (
      this.#hits.length === OPTIONS.secondThresHold &&
      userLotto.includes(this.#bonusNumber)
    );
  }

  /**
   * 등수에 따라 5등부터 1등까지 0번 째 인덱스부터 4번 째 인덱스까지 적중 횟수를 차례대로 더해간다
   */
  #setStats() {
    this.#ranks.forEach(rank => {
      if (INDEX_TABLE[rank]) this.#stats[INDEX_TABLE[rank] - 1] += 1;
    });
  }

  /**
   * 5등부터 1등까지 적중 횟수를 담은 배열을 반환한다.
   * @returns {number[]}
   */
  getStats() {
    this.#setStats();

    return this.#stats;
  }

  getProfitRate(purchaseAmount) {
    return caculateProfitRate(purchaseAmount, this.#stats);
  }
}

export default Statistics;
