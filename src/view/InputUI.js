import { INPUT_MESSAGE } from '../utils/constant';
import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../utils/validator';

export const Handle_Input = {
  moneyInput: async () => {
    try {
      const money = await Console.readLineAsync(INPUT_MESSAGE.MONEY_AMOUNT);
      Validator.Is_Number(money);
      Validator.Money_Divisible(money);
      return money;
    } catch (e) {
      Console.print(e);
      Handle_Input.moneyInput();
    }
  },
};
