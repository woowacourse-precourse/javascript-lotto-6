import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/Messages.js';
import Money from './Money.js';
import Lottos from './Lottos.js';
import Lotto from './Lotto.js';
import WinningStatistics from './WinningStatistics.js';
import BonusNum from './BonusNum.js';
class App {
  async checkBuyMoney() {
    while (1) {
      try {
        const buyMoney = await this.inputNum();
        this.Money = new Money(buyMoney);
        return buyMoney;
      } catch {}
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
      } catch {}
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
        this.BonusNum = new BonusNum(bonusNum, this.winningNum);
        return bonusNum;
      } catch {}
    }
  }
  async inputNum() {
    const buyMoney = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BUY_MONEY);
    return buyMoney;
  }
  async play() {
    this.buyMoney = await this.checkBuyMoney();
    this.Lottos = new Lottos(this.buyMoney);
    this.Lottos.printNumOfLottos();
    this.Lottos.printCreatedLottos();
    this.winningNum = await this.inputWinningNum();
    this.bonusNum = await this.inputBonusNum();
    this.winningStatistics = new WinningStatistics(
      this.Lottos.createdLottos,
      this.bonusNum,
      this.winningNum,
      this.buyMoney
    );
    this.winningStatistics.printResult();
  }
}

export default App;
