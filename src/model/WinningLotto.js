import { ERROR, SIGN, VALUE } from '../constants/constants.js';

class WinningLotto {
  #winningLotto;

  constructor(input) {
    const numbers = input.split(SIGN.cuttingUnit).map(Number);
    this.#validate(numbers);
    this.#winningLotto = numbers;
  }

  #validate(numbers) {
    if (numbers.some((num) => isNaN(num) || num === 0)) {
      throw new Error(ERROR.invalidNumber);
    }
    if (numbers.some((num) => num < VALUE.minLottoNumber || num > VALUE.maxLottoNumber)) {
      throw new Error(ERROR.invalidRange);
    }
    if (numbers.length !== VALUE.lottoNumberCount) {
      throw new Error(ERROR.invalidLength);
    }
  }

  getWinningNums() {
    return this.#winningLotto;
  }
}

export default WinningLotto;
