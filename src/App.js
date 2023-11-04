import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/Messages.js';
import Money from './Money.js';
import Lottos from './Lottos.js';

class App {
  constructor() {}
  async play() {
    const buyMoney = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BUY_MONEY);
    this.Money = new Money(buyMoney);
    this.Lottos = new Lottos(buyMoney);
    this.Lottos.printNumOfLottos();
    this.Lottos.printCreatedLottos();
  }
}

export default App;
