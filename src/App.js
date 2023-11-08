import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/Messages.js';
import Money from './Money.js';
import Lottos from './Lottos.js';
import Lotto from './Lotto.js';
import WinningStatistics from './WinningStatistics.js';
class App {
  async checkBuyMoney() {
    while (1) {
      try {
        const buyMoney = await this.inputNum();
        this.Money = new Money(buyMoney);
        return buyMoney;
      } catch (Err) {
        Console.print(Err);
      }
    }
  }
  modifyWinningNum(winningNum) {
    winningNum = winningNum.split(',');
    winningNum.map((e, i) => {
      winningNum[i] = parseInt(e);
    });
    return winningNum;
  }
  async inputWinningNum() {
    while (1) {
      try {
        let winningNum = await Console.readLineAsync(
          INPUT_MESSAGE.INPUT_WINNINGNUM
        );
        winningNum = this.modifyWinningNum(winningNum);
        this.Lotto = new Lotto(winningNum);
        return winningNum;
      } catch (err) {
        Console.print(err);
      }
    }
    return winningNum;
  }
  async inputBonusNum() {
    while (1) {
      try {
        let bonusNum = await Console.readLineAsync(
          INPUT_MESSAGE.INPUT_BONUSNUM
        );
        bonusNum = parseInt(bonusNum);
        this.Lotto.checkNumRange(bonusNum);
        return bonusNum;
      } catch (Err) {
        Console.print(Err);
      }
    }
  }
  async inputNum() {
    const buyMoney = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BUY_MONEY);
    return buyMoney;
  }
  async play() {
    const buyMoney = await this.checkBuyMoney();
    this.Lottos = new Lottos(buyMoney);
    this.Lottos.printNumOfLottos();
    this.Lottos.printCreatedLottos();
    const winningNum = await this.inputWinningNum();
    const bonusNum = await this.inputBonusNum();
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
