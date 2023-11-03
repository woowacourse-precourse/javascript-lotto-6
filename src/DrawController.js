import { MissionUtils } from "@woowacourse/mission-utils";
import LottoNumberValidator from "./LottoNumberValidator.js";
import { MESSAGES } from "./constants.js";

class DrawController {
  static async getWinningNumbers() {
    const winningNumbersText = await MissionUtils.Console.readLineAsync("");

    return winningNumbersText;
  }

  static checkOnlyAllowedWinningNumbers(text) {
    const pattern = /^(\d?\s?,?)+$/;

    return pattern.test(text);
  }

  static checkWinningNumbersCount(numbers) {
    return LottoNumberValidator.checkNumbersCount(numbers);
  }

  static checkWinningNumbersInRange(numbers) {
    return LottoNumberValidator.checkAllNumbersInRange(numbers);
  }

  static checkWinningNumbersUnique(numbers) {
    return LottoNumberValidator.checkAllNumbersUnique(numbers);
  }

  static processWinningNumbersText(text) {
    if (!DrawController.checkOnlyAllowedWinningNumbers(text)) {
      throw new Error(MESSAGES.winningNumberNotAllowedCharacterError);
    }

    const textNumbers = text
      .split(",")
      .map((text) => text.trim())
      .filter((text) => text.length > 0);

    if (!DrawController.checkWinningNumbersCount(textNumbers)) {
      throw new Error(MESSAGES.winningNumbersCountError);
    }

    const numbers = textNumbers.map((number) => parseInt(number));

    if (!DrawController.checkWinningNumbersInRange(numbers)) {
      throw new Error(MESSAGES.winningNumberRangeError);
    }

    if (!DrawController.checkAllNumbersUnique(numbers)) {
      throw new Error(MESSAGES.duplicatedWinningNumbersError);
    }

    return numbers;
  }

  static async getBonusNumber() {
    const bonusNumberText = await MissionUtils.Console.readLineAsync("");

    return bonusNumberText;
  }
}

export default DrawController;
