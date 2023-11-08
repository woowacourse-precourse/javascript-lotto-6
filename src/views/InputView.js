import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/InputMessage.js';

class InputView {
  static async inputPrice() {
    const input = await Console.readLineAsync(`${INPUT_MESSAGE.price}\n`);
    return input;
  }

  static async inputWinningNumber() {
    const input = await Console.readLineAsync(`\n${INPUT_MESSAGE.winningNumber}\n`);
    const numberList = input
      .split(',')
      .map((number) => parseInt(number.trim()))
      .filter((number) => number !== '');
    return numberList;
  }

  static async inputBonusNumber() {
    const input = await Console.readLineAsync(`\n${INPUT_MESSAGE.bonusNumber}\n`);
    return input;
  }
}

export default InputView;
