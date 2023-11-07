import { Console } from '@woowacourse/mission-utils';
import { LottoStore } from './LottoStore.js';
import { Message } from './Message.js';

class LottoStoreUI {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  printPurchasAmount = async () => {
    await Console.print(Message.INPUT_PURCHASING_AMOUNT);
    return this.InputMoney();
  };

  InputMoney = async () => {
    while (true) {
      try {
        const money = await Console.readLineAsync('');
        const numberOfLotto = await this.lottoStore.purchaseLotto(money);
        this.PrintNumberOfLotto(numberOfLotto);
        return numberOfLotto;
      } catch (error) {
        Console.print(error.message);
      }
    }
  };

  PrintNumberOfLotto = (numberOfLotto) => {
    Console.print(`\n${numberOfLotto}${Message.COUNT_PURCHASING_AMOUNT}`);
  };
}

export { LottoStoreUI };
