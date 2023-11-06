import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/Messages.js';
import Money from './Money.js';
import Lottos from './Lottos.js';
import Lotto from './Lotto.js';
import WinningStatistics from './WinningStatistics.js';
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
    winningNum.map((e, i) => {
      winningNum[i] = parseInt(e);
    });
    this.Lotto = new Lotto(winningNum);

    let bonusNum = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUSNUM);
    bonusNum = parseInt(bonusNum);
    this.Lotto.checkNumRange(bonusNum);

    this.winningStatistics = new WinningStatistics(
      this.Lottos.createdLottos,
      bonusNum,
      winningNum,
      buyMoney
    );

    this.winningStatistics.printResult();
  }
}

export default App;
