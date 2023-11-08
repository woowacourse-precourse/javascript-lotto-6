import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './message.js';

class Input {
  #purchase;
  #isValid;
  async inputPurchase() {
    while (true) {
      try {
        this.#purchase = await Console.readLineAsync(MESSAGES.PURCHASE_INPUT);
        this.#isValid = this.purchaseValid(this.#purchase);
        if (this.#isValid) {
          return this.#purchase;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  purchaseValid(purchase) {
    let valid = true;
    if (isNaN(purchase)) {
      valid = false;
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    } else if (parseInt(purchase) < 1000) {
      valid = false;
      throw new Error('[ERROR] 1000원 이상 입력해 주세요.');
    } else if (parseInt(purchase) % 1000 !== 0) {
      valid = false;
      throw new Error('[ERROR] 1000원단위로 입력해주세요');
    }
    return valid;
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
