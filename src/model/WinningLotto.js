import {
  validateNumber,
  validateRange,
  validateLength,
  validateUnique,
} from '../utils/validateFn.js';
import { inputWinningNumber } from '../view/inputPrompt.js';

class WinningLotto {
  #winningNumber;

  async setWinningNumber() {
    const input = await inputWinningNumber();
    const winningNumberArr = input.split(',').map((number) => parseInt(number));
    this.#winningNumberValidate(winningNumberArr);
    this.#winningNumber = winningNumberArr;
  }

  #winningNumberValidate(winningNumberArr) {
    winningNumberArr.forEach((element) => {
      validateNumber(element);
      validateRange(element);
    });
    validateLength(winningNumberArr);
    validateUnique(winningNumberArr);
  }
}

export default WinningLotto;
