import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constant/Messages.js';

import Money from './Money.js';

class App {
  async play() {
    const buyMoney = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BUY_MONEY);

    new Money(buyMoney);
  }
}

export default App;
