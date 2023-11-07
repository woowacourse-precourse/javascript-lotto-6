export default class PlayerLotto {
  /**
   * @private
   * @type {number[]}
   */
  #lottoNumbers;

  /**
   * @constructor
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#lottoNumbers = numbers;
  }

  /**
   * @public
   * @returns {number[]}
   */
  getLottoNumbers() {
    return this.#lottoNumbers;
  }

  /**
   * @public
   * @param {number[]} winningNumbers
   * @param {number} winningBonusNumber
   * @returns {{bonusNumber: boolean, mainNumber: number}}
   */
  compare(winningNumbers, winningBonusNumber) {
    const compareResult = {
      mainNumber: 0,
      bonusNumber: false,
    };

    this.#lottoNumbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        compareResult.mainNumber += 1;
      }
      if (number === winningBonusNumber) {
        compareResult.bonusNumber = true;
      }
    });

    return compareResult;
  }
}
