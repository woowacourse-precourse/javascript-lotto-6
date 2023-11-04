import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
class LottoStore {
  printPurchasingAmout = () => {
    Console.print(Message.INPUT_PURCHASING_AMOUNT);
    this.purchaseLotto();
  };

  static isValidMoney = (money) => {
    if (isNaN(money)) {
      throw new Error(Message.error.NOT_NUMBER);
    }
    if (money % 1000 !== 0) {
      throw new Error(Message.error.NOT_ONETHOUSAND);
    }
  };

  purchaseLotto = async () => {
    const money = await Console.readLineAsync('');
    try {
      LottoStore.isValidMoney(money);
    } catch (error) {
      Console.print(error.message);
      await this.purchaseLotto();
    }
  };
}

export { LottoStore };
