import {
  validateNumber,
  validateRange,
  validateLength,
  validateUnique,
  validateFindEqual,
} from '../utils/validateFn.js';
import { inputBonusNumber, inputWinningNumber } from '../view/inputPrompt.js';

class WinningLotto {
  #winningNumber;
  #bonusNumber;

  async setWinningNumber() {
    const input = await inputWinningNumber();
    const winningNumberArr = input.split(',').map((number) => parseInt(number));
    this.#winningNumberValidate(winningNumberArr);
    this.#winningNumber = winningNumberArr;
  }

  getWinningNumber() {
    return this.#winningNumber;
  }

  #winningNumberValidate(winningNumberArr) {
    winningNumberArr.forEach((element) => {
      validateNumber(element);
      validateRange(element);
    });
    validateLength(winningNumberArr);
    validateUnique(winningNumberArr);
  }

  async setBonusNumber() {
    const input = await inputBonusNumber();
    this.#bonusNumberValidate(input);
    this.#bonusNumber = parseInt(input);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #bonusNumberValidate(number) {
    validateNumber(number);
    validateRange(number);
    validateFindEqual(this.#winningNumber, parseInt(number));
  }
}

export default WinningLotto;
