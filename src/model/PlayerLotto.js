export default class PlayerLotto {
  /**
   * @private
   * @type {number[]}
   */
  #lottoNumbers;

  constructor(numbers) {
    this.#lottoNumbers = numbers;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }

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
