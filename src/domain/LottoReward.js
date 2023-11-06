import { isSameKeyList } from '../utils/object.js';

import ERROR_MESSAGE_GENERATOR from '../constants/error.js';

import ApplicationError from '../exceptions/ApplicationError.js';

/**
 * @typedef {object} RewardRequirement
 * @property {number} match
 * @property {boolean} hasBonus
 */

class LottoReward {
  static ERROR_MESSAGES = Object.freeze({
    invalidRequirement: '유효하지 않은 경품 조건입니다',
    invalidPrize: ERROR_MESSAGE_GENERATOR.notNumber('로또의 경품 조건'),
  });

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
    this.#validate(requirement, prize);
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

  #validate(requirement, prize) {
    this.#validateRequirement(requirement);
    if (typeof prize !== 'number') {
      throw new ApplicationError(LottoReward.ERROR_MESSAGES.invalidPrize);
    }
  }

  /**
   * 로또 경품 조건을 반환합니다.
   * @returns {RewardRequirement}
   */
  getRequirement() {
    return this.#requirement;
  }

  /**
   * 로또 경품의 상금을 반환합니다.
   * @returns {number}
   */
  getPrize() {
    return this.#prize;
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
   * @returns {boolean}
   */
  checkRequirement(requirement) {
    this.#validateRequirement(requirement);

    if (this.#requirement.hasBonus && !requirement.hasBonus) {
      return false;
    }

    if (this.#requirement.match === requirement.match) {
      this.#quantity += 1;
      return true;
    }

    return false;
  }

  #validateRequirement(requirement) {
    if (!isSameKeyList(requirement, { match: 0, hasBonus: true })) {
      throw new ApplicationError(LottoReward.ERROR_MESSAGES.invalidRequirement);
    }
  }
}

export default LottoReward;
