import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import { INPUT_MESSAGE } from '../constants/constants.js';

const InputView = {
  async readPurchaseMoney() {
    let trimmedMoney;
    try {
      const purchaseMoney = await Console.readLineAsync(
        INPUT_MESSAGE.purchaseMoney,
      );
      trimmedMoney = purchaseMoney.trim();
      Validator.validateMoney(trimmedMoney);
    } catch (error) {
      Console.print(error.message);
    }
    return trimmedMoney;
  },
};

export default InputView;
