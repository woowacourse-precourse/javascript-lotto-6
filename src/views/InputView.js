import { Console } from '@woowacourse/mission-utils';

import { INPUT } from '../constants/message/io.js';
import { DELIMITER } from '../constants/setting.js';
import { stringToNumber, stringToNumberArray } from '../utils/converter.js';
import MoneyValidator from '../validator/MoneyValidator.js';
import LottoValidator from '../validator/LottoValidator.js';
import CommonValidator from '../validator/CommonValidator.js';

class InputView {
  static async readMoney() {
    const inputMoney = await Console.readLineAsync(INPUT.money);
    const money = stringToNumber(inputMoney);
    MoneyValidator.validate(money);

    return money;
  }

  static async readWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(
      INPUT.winningNumbers,
    );
    const winningNumbers = stringToNumberArray(inputWinningNumbers, DELIMITER);
    LottoValidator.validate(winningNumbers);

    return winningNumbers;
  }

  static async readBonusNumber(winningNumbers) {
    const inputBonusNumber = await Console.readLineAsync(INPUT.bonusNumber);
    const bonusNumber = stringToNumber(inputBonusNumber);
    CommonValidator.validate(bonusNumber);
    LottoValidator.validateBonusNumberInLottoNumbers(
      winningNumbers,
      bonusNumber,
    );

    return bonusNumber;
  }
}

export default InputView;
