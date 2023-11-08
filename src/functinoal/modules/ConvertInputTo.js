import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';
import Get from './Get.js';
import Print from './Print.js';

import CONSTANTS from '../../constants/CONSTANTS.js';

const {
  PURCHASE_PRICE_INPUT_MESSAGE,
  WINNING_NUMBER_INPUT_MESSAGE,
  BONUS_NUMBER_INPUT_MESSAGE,
  LOTTO_NUMBERS_SEPARATOR,
  LOTTO_PRICE,
  LOTTO_NUMBER_UPPER,
  MISS_STATE,
  BONUS_STATE,
  HIT_STATE,
} = CONSTANTS;

class ConvertInputTo {
  static async lottoArray() {
    return await ConvertInputTo.purchasePrice().then(purchasePrice =>
      Object.freeze(Get.randomLottoArray(purchasePrice / LOTTO_PRICE))
    );
  }

  static async purchasePrice() {
    while (true) {
      const inputString = await Console.readLineAsync(
        PURCHASE_PRICE_INPUT_MESSAGE
      );
      try {
        ErrorCheck.purchasePrice(inputString, LOTTO_PRICE);
        return Number(inputString);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }

  static async lottoBoard() {
    const winningNumbers = await ConvertInputTo.lottoNumbers();
    Print.lineBreak();
    const bonusNumber = await ConvertInputTo.bonusNumber(winningNumbers);

    return Object.freeze(Get.lottoBoard(winningNumbers, bonusNumber));
  }

  static async lottoNumbers() {
    while (true) {
      const numbersString = await Console.readLineAsync(
        WINNING_NUMBER_INPUT_MESSAGE
      );
      try {
        ErrorCheck.lottoNumbersString(numbersString);
        return Object.freeze(
          numbersString.split(LOTTO_NUMBERS_SEPARATOR).map(Number)
        );
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }

  static async bonusNumber(winningNumbers) {
    while (true) {
      const numberString = await Console.readLineAsync(
        BONUS_NUMBER_INPUT_MESSAGE
      );
      try {
        ErrorCheck.bonusNumberString(numberString, winningNumbers);
        return Number(numberString);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }
}

export default ConvertInputTo;
