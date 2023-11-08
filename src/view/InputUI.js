import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../utils/constant';
import { Validator } from '../utils/validator';
import { Handle_Output } from './OutputUI';
import { Convert } from '../utils/calc';

export const Handle_Input = {
  moneyInput: async () => {
    try {
      const money = await Console.readLineAsync(INPUT_MESSAGE.MONEY_AMOUNT);
      Validator.Non_Exist(money);
      Validator.Is_Number(money);
      Validator.Money_Divisible(money);
      return money;
    } catch (error) {
      const retryCallback = () => Handle_Input.moneyInput();
      return Retrylogic(error, retryCallback);
    }
  },

  winningInput: async () => {
    try {
      const winning = await Console.readLineAsync(INPUT_MESSAGE.WINNING);
      Validator.Non_Exist(winning);
      Validator.Check_NumRange_SpeChar(winning);

      const convertedwinning = Convert.Convert_Winninglotto(winning);
      Validator.Has_sixLength(convertedwinning);
      Validator.Is_Duplicate(convertedwinning);
      return convertedwinning;
    } catch (error) {
      const retryCallback = () => Handle_Input.winningInput();
      return Retrylogic(error, retryCallback);
    }
  },

  bonusInput: async () => {
    try {
      const bonus = await Console.readLineAsync(INPUT_MESSAGE.BONUS);
      Validator.Non_Exist(bonus);
      Validator.Check_Bonus(bonus);
      Validator.Is_Number(bonus);
      return bonus;
    } catch (error) {
      const retryCallback = () => Handle_Input.bonusInput();
      return Retrylogic(error, retryCallback);
    }
  },
};

async function Retrylogic(errormessage, callback) {
  if (errormessage == ERROR_MESSAGE.INVALID_VALUE) {
    throw errormessage;
  }
  Handle_Output.Error_Output(errormessage);
  return await callback();
}
