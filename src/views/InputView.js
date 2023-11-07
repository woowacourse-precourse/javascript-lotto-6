import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/constants.js';
import Validator from '../utils/Validator.js';

const InputView = {
  async readPurchaseMoney() {
    let trimmedMoney;
    while (true) {
      try {
        const purchaseMoney = await Console.readLineAsync(
          INPUT_MESSAGE.purchaseMoney,
        );
        trimmedMoney = purchaseMoney.trim();
        Validator.validateMoney(trimmedMoney);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return trimmedMoney;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumber,
    );
    return winningNumbers;
  },

  async readBonusNumber(winningLotto) {
    let trimmedBonus;
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(
          INPUT_MESSAGE.bonusNumber,
        );
        trimmedBonus = bonusNumber.trim();
        Validator.validateBouns(winningLotto.getWinningNumbers(), trimmedBonus);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return trimmedBonus;
  },
};

export default InputView;
