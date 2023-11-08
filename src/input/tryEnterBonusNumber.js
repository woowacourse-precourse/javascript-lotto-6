import { Console } from '@woowacourse/mission-utils';
import enterBonusNumber from './enterBonusNumber.js';

function tryEnterBonusNumber(winningNumbers) {
  let bonusNumber;

  async function tryEnter() {
    try {
      bonusNumber = await enterBonusNumber(winningNumbers);
      return bonusNumber;
    } catch (e) {
      Console.print(e.message);
      return tryEnter();
    }
  }

  return tryEnter();
}

export default tryEnterBonusNumber;
