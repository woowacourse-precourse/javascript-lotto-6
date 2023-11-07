import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

import validateBonusNumber from '../Validation/validateBonusNumber.js';

async function enterBonusNumber(winningNumbers) {
  const bonusNumberInput = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);

  if (validateBonusNumber(bonusNumberInput, winningNumbers)) {
    return Number(bonusNumberInput);
  }

  throw new Error(message.ERROR);
}

export default enterBonusNumber;
