import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/Messages.js';
import Money from './Money.js';
import Lottos from './Lottos.js';
import Lotto from './Lotto.js';
class App {
  constructor() {}
  async play() {
    const buyMoney = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BUY_MONEY);
    this.Money = new Money(buyMoney);
    this.Lottos = new Lottos(buyMoney);
    this.Lottos.printNumOfLottos();
    this.Lottos.printCreatedLottos();

    let winningNum = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_WINNINGNUM
    );

    winningNum = winningNum.split(',');
    this.Lotto = new Lotto(winningNum);

    this.Lotto.inputBonusNum();
  }
}

export default App;
