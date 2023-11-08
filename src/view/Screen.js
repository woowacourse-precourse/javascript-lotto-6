import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../Constants';

class Screen {
  static async inputPurchaseMoney() {
    Console.print(MESSAGES.purchaseMoneyInputMessage);
    const money = Number(await Console.readLineAsync());

    return money;
  }
}

export default Screen;
