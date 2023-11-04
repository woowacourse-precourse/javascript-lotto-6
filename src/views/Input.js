import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from '../constants/message/io.js';
import Converter from '../utils/converter.js';
import DELIMITER from '../constants/message/setting.js';

class InputView {
  static async readMoney() {
    const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.money);
    const money = Converter.stringToNumber(inputMoney);

    return money;
  }

  static async readWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbers,
    );
    const winningNumbers = Converter.stringToNumberArray(
      inputWinningNumbers,
      DELIMITER,
    );

    return winningNumbers;
  }

  static async readBonusNumber() {
    const inputBonusNumber = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumber,
    );
    const bonusNumber = Converter.stringToNumber(inputBonusNumber);

    return bonusNumber;
  }
}

export default InputView;
