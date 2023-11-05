import { Console } from '@woowacourse/mission-utils';
import { LottoStore } from './LottoStore.js';
import { Message } from './Message.js';

class Main {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  start = async () => {
    this.printPurchasAmount();
  };

  printPurchasAmount = () => {
    Console.print(Message.INPUT_PURCHASING_AMOUNT);
    this.InputMoney();
  };

  InputMoney = async () => {
    try {
      const money = await Console.readLineAsync('');
      const numberOfLotto = await this.lottoStore.purchaseLotto(money);
    } catch (error) {
      Console.print(error.message);
      this.InputMoney();
    }
  };
}

export { Main };
