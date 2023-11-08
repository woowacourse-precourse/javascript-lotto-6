import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants/printMessages';

class InputView {
  static async readPrice() {
    return await Console.readLineAsync(INPUT_MESSAGE.buy);
  }

  static async readWinningNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
  }

  static async readBonusNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  }
}

export default InputView;
