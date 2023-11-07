import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constant';
import { Validator } from '../utils/validator';
import { Handle_Output } from './OutputUI';
import { Convert } from '../utils/calc';

export const Handle_Input = {
  moneyInput: async () => {
    try {
      const money = await Console.readLineAsync(INPUT_MESSAGE.MONEY_AMOUNT);
      Validator.Is_Number(money);
      Validator.Money_Divisible(money);
      return money;
    } catch (error) {
      Handle_Output.Error_Output(error);
      return await Handle_Input.moneyInput();
    }
  },

  winningInput: async () => {
    try {
      const winning = await Console.readLineAsync(INPUT_MESSAGE.WINNING);
      Validator.Check_NumRange_SpeChar(winning);

      const convertedwinning = Convert.Convert_Winninglotto(winning);
      Validator.Has_sixLength(convertedwinning);
      Validator.Is_Duplicate(convertedwinning);
      return convertedwinning;
    } catch (error) {
      Handle_Output.Error_Output(error);
      return await Handle_Input.winningInput();
    }
  },

  bonusInput: async () => {
    try {
      const bonus = await Console.readLineAsync(INPUT_MESSAGE.BONUS);
      Validator.Check_Bonus(bonus);
      Validator.Is_Number(bonus);
      return bonus;
    } catch (error) {
      Handle_Output.Error_Output(error);
      return await Handle_Input.bonusInput();
    }
  },
};
