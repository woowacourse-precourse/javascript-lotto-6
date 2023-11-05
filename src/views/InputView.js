import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import { INPUT_MESSAGE } from '../constants/constants.js';

const InputView = {
  async readPurchaseMoney() {
    const purchaseMoney = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseMoney,
    );
    const trimmedMoney = purchaseMoney.trim();
    return trimmedMoney;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumber,
    );
    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
    const trimmedBonus = bonusNumber.trim();
    return trimmedBonus;
  },
};

export default InputView;
