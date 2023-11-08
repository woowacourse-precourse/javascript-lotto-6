import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/InputMessage.js';

class InputView {
  static async inputPrice() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.price);
    return input;
  }

  static async inputWinningNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.winningNumber);
    const numberList = input
      .split(',')
      .map((number) => number.trim())
      .filter((number) => number !== '');
    return numberList;
  }

  static async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
    return input;
  }
}

export default InputView;
