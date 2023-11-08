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
      Get.randomLottoArray(purchasePrice / LOTTO_PRICE)
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
    const board = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
    (await ConvertInputTo.lottoNumbersArray()).forEach(
      number => (board[number] = HIT_STATE)
    );

    Print.lineBreak();

    board[await ConvertInputTo.bonusNumber(board)] = BONUS_STATE;
    return Object.freeze(board);
  }

  static async lottoNumbersArray() {
    while (true) {
      const numbersString = await Console.readLineAsync(
        WINNING_NUMBER_INPUT_MESSAGE
      );
      try {
        ErrorCheck.lottoNumbersString(numbersString);
        return numbersString.split(LOTTO_NUMBERS_SEPARATOR).map(Number);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }

  static async bonusNumber(lottoBoard) {
    while (true) {
      const numberString = await Console.readLineAsync(
        BONUS_NUMBER_INPUT_MESSAGE
      );
      try {
        ErrorCheck.bonusNumberString(numberString, lottoBoard);
        return Number(numberString);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }
}

export default ConvertInputTo;
