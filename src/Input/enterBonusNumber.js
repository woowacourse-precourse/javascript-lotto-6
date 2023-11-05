import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

async function enterBonusNumber() {
  const bonusNumberInput = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
}

export default enterBonusNumber;
