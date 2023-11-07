import Cash from './Cash.js';
import { CASH } from '../data.js';
import { INQUIRY } from '../messages.js';
import { Console } from '@woowacourse/mission-utils';

class Customer {
  async buyLottoIn({ store }) {
    try {
      const input = await Console.readLineAsync(INQUIRY.CASH);
      const cash = new Cash(input).getValue();
      const count = cash / CASH.UNIT;
      await store.sellLotto({ count, cash });
    } catch (error) {
      Console.print(error.message);
      await this.buyLottoIn({ store });
    }
  }
}

export default Customer;
