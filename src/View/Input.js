import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './message';

class Input {
  async inputPurchase() {
    const purchase = await Console.readLineAsync(MESSAGES.PURCHASE_INPUT);
    return purchase;
  }

  async inputWinningNum() {
    const winning = await Console.readLineAsync(MESSAGES.WINNING_INPUT);
    return winning;
  }

  async inputBonus() {
    const bonus = await Console.readLineAsync(MESSAGES.BONUS_INPUT);
    return bonus;
  }
}

export default Input;
