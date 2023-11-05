import paramType from '../lib/paramType/src/paramType.js';

export default class LottoDrawChecker {
  #winningNumbers;
  #bonusNumber;

  constructor(
    winningNumbers,
    bonusNumber,
    _0 = paramType(winningNumbers, Array),
    _1 = paramType(bonusNumber, 'number'),
  ) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  matchingNumberCount(lotto, _ = paramType(lotto, Array)) {
    return lotto.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }
}
