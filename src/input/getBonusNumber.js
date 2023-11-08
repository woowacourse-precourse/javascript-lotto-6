import { INPUT_MESSAGES } from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';
import validateBonusNumber from '../validations/validateBonusNumber.js';

const getBonusNumber = async (winningNumbers) => {
  let flag = false;
  let bonusNumber;
  while (!flag) {
    try {
      bonusNumber = Number(await Console.readLineAsync(INPUT_MESSAGES.bonusNumber));
      flag = validateBonusNumber(winningNumbers, bonusNumber);
    } catch (e) {
      Console.print(e.message);
    }
  }

  return bonusNumber;
};

export default getBonusNumber;
