import { Console } from '@woowacourse/mission-utils';
import { LottoStore } from './LottoStore.js';
import { Message } from './Message.js';

class LottoStoreUI {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  printPurchasAmount = () => {
    Console.print(Message.INPUT_PURCHASING_AMOUNT);
    this.InputMoney();
  };

  InputMoney = async () => {
    try {
      const money = await Console.readLineAsync('');
      const numberOfLotto = await this.lottoStore.purchaseLotto(money);
      this.PrintNumberOfLotto(numberOfLotto);
    } catch (error) {
      Console.print(error.message);
      this.InputMoney();
    }
  };

  PrintNumberOfLotto = (numberOfLotto) => {
    Console.print(`${numberOfLotto}${Message.COUNT_PURCHASING_AMOUNT}`);
  };
}

export { LottoStoreUI };
