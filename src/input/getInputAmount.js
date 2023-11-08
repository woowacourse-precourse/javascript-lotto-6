import validateInputAmount from '../validations/validateInputAmount.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

const getInputAmount = async () => {
  let flag = false;
  let inputAmount;
  while (!flag) {
    try {
      inputAmount = Number(await Console.readLineAsync(INPUT_MESSAGES.inputAmount));
      flag = validateInputAmount(inputAmount);
    } catch (e) {
      Console.print(e.message);
    }
  }

  return inputAmount;
};

export default getInputAmount;
