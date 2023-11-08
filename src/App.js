import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/Messages.js';
import Money from './Money.js';
import Lottos from './Lottos.js';
import Lotto from './Lotto.js';
import WinningStatistics from './WinningStatistics.js';
import BonusNum from './BonusNum.js';
class App {
  async inputNum(output) {
    const input = await Console.readLineAsync(output);
    return input;
  }
  async getBuyMoney() {
    try {
      this.buyMoney = await this.inputNum(INPUT_MESSAGE.INPUT_BUY_MONEY);
      this.Money = new Money(this.buyMoney);
    } catch {
      return this.getBuyMoney();
    }
    this.createLottos();
  }
  createLottos() {
    this.Lottos = new Lottos(this.buyMoney);
    this.Lottos.printNumOfLottos();
    this.Lottos.printCreatedLottos();
  }
  async inputWinningNum() {
    try {
      const winningNum = await this.inputNum(INPUT_MESSAGE.INPUT_WINNINGNUM);
      this.winningNum = this.modifyWinningNum(winningNum);
      new Lotto(this.winningNum);
    } catch {
      return this.inputWinningNum();
    }
  }

  modifyWinningNum(winningNum) {
    winningNum = winningNum.split(',');
    winningNum.map((e, i) => {
      winningNum[i] = parseInt(e);
    });
    return winningNum;
  }

  async inputBonusNum() {
    try {
      const bonusNum = await this.inputNum(INPUT_MESSAGE.INPUT_BONUSNUM);
      this.bonusNum = parseInt(bonusNum);
      new BonusNum(bonusNum, this.winningNum);
    } catch {
      return this.inputBonusNum();
    }
  }

  printWinningStatistics() {
    this.winningStatistics = new WinningStatistics(
      this.Lottos.createdLottos,
      this.bonusNum,
      this.winningNum,
      this.buyMoney
    );
    this.winningStatistics.printResult();
  }
  async play() {
    await this.getBuyMoney();
    await this.inputWinningNum();
    await this.inputBonusNum();
    await this.printWinningStatistics();
  }
}

export default App;
