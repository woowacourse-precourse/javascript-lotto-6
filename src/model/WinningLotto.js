import {
  validateNumber,
  validateRange,
  validateLength,
  validateUnique,
  validateFindEqual,
  validateEmpty,
} from '../utils/validateFn.js';
import { inputBonusNumber, inputWinningNumber } from '../view/inputPrompt.js';
import { printErrorMessage } from '../view/outputPompt.js';

class WinningLotto {
  #winningNumber;
  #bonusNumber;

  async setWinningNumber() {
    try {
      const input = await inputWinningNumber();
      const winningNumberArr = input.split(',');
      this.#winningNumberValidate(winningNumberArr);
      this.#winningNumber = winningNumberArr.map((num) => parseInt(num));
    } catch (error) {
      printErrorMessage(error);
      await this.setWinningNumber();
    }
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
    try {
      const input = await inputBonusNumber();
      this.#bonusNumberValidate(input);
      this.#bonusNumber = parseInt(input);
    } catch (error) {
      printErrorMessage(error);
      await this.setBonusNumber();
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #bonusNumberValidate(number) {
    validateEmpty(number);
    validateNumber(number);
    validateRange(number);
    validateFindEqual(this.#winningNumber, parseInt(number));
  }
}

export default WinningLotto;
