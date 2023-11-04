/**
 * @typedef {object} RewardRequirement
 * @property {number} match
 * @property {boolean} hasBonus
 */

class LottoReward {
  /**
   * 로또 경품의 조건입니다.
   * @type {RewardRequirement}
   */
  #requirement;

  /**
   * 로또 경품의 상금입니다.
   * @type {number}
   */
  #prize;

  /**
   * 로또 경품의 갯수입니다.
   * @type {number}
   */
  #quantity = 0;

  /**
   * @param {RewardRequirement} requirement
   * @param {number} prize
   */
  constructor(requirement, prize) {
    this.#requirement = requirement;
    this.#prize = prize;
  }

  /**
   * @param {RewardRequirement} requirement
   * @param {number} prize
   * @returns {LottoReward}
   */
  static of(requirement, prize) {
    return new LottoReward(requirement, prize);
  }

  /**
   * 로또 경품 조건을 반환합니다.
   * @returns {RewardRequirement}
   */
  getRequirement() {
    return this.#requirement;
  }

  /**
   * 갯수와 비례한 로또 경품의 총 상금을 반환합니다.
   * @returns {number}
   */
  getTotalPrize() {
    return this.#prize * this.#quantity;
  }

  /**
   * 현재 경품의 갯수를 반환합니다.
   * @returns {number}
   */
  getQuantity() {
    return this.#quantity;
  }

  /**
   * 조건을 비교하여 갯수를 증가시킵니다.
   * @param {RewardRequirement} requirement
   * @returns {void}
   */
  checkRequirement({ match, hasBonus }) {
    if (this.#requirement.match === match && this.#requirement.hasBonus === hasBonus) {
      this.#quantity += 1;
    }
  }
}

export default LottoReward;
