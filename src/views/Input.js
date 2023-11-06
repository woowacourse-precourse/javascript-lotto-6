import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from '../constants/message/io.js';
import { DELIMITER } from '../constants/setting.js';
import Converter from '../utils/converter.js';
import MoneyValidator from '../validator/Money.js';
import LottoValidator from '../validator/Lotto.js';
import OutputView from './Output.js';
import CommonValidator from '../validator/Common.js';

class InputView {
  static async retryOnError(callbackReadFunc) {
    try {
      return await callbackReadFunc();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.retryOnError(callbackReadFunc);
    }
  }

  static async readMoney() {
    const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.money);
    const money = Converter.stringToNumber(inputMoney);
    MoneyValidator.validate(money);

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
    LottoValidator.validate(winningNumbers);

    return winningNumbers;
  }

  static async readBonusNumber() {
    const inputBonusNumber = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumber,
    );
    const bonusNumber = Converter.stringToNumber(inputBonusNumber);
    CommonValidator.validate(bonusNumber);

    return bonusNumber;
  }
}

export default InputView;
