import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';
import Get from './Get.js';
import Print from './Print.js';

const LOTTO_PRICE = 1000;
const LOTTO_UPPER_NUMBER = 45;

const PURCHASE_PRICE_INPUT_MESSAGE = '구입금액을 입력해 주세요.\n';
const WINNING_NUMBER_INPUT_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';
const BONUS_NUMBER_INPUT_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';

const MISS_STATE = 0;
const BONUS_STATE = 0.5;
const HIT_STATE = 1;

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
    const board = new Array(LOTTO_UPPER_NUMBER + 1).fill(MISS_STATE);
    (await ConvertInputTo.winningNumbersArray()).forEach(
      number => (board[number] = HIT_STATE)
    );

    board[await ConvertInputTo.bonusNumber(board)] = BONUS_STATE;
    return Object.freeze(board);
  }

  static async winningNumbersArray() {
    while (true) {
      const numbersString = await Console.readLineAsync(
        WINNING_NUMBER_INPUT_MESSAGE
      );
      try {
        ErrorCheck.lottoNumbersString(numbersString);
        return numbersString.split(',').map(Number);
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
