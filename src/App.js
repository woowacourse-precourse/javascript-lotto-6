import Money from './Money.js';
import RandomPick from './RandomPick.js';
import Lotto from './Lotto.js';
import WinInput from './Win.js';
import Check from './Check.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import ExceptionList from './ExceptionList.js';
import BonusInput from './Bonus.js';
import Input from './Input.js';

class App {
  async play() {
    const input = new Input();
    let payed = await input.getPayedMoney();
    let newMoney = new Money(payed);
    newMoney.printCalLottoCount();

    let lotto = [];
    let checkLotto = [];

    for (let i = 0; i < newMoney.lottoCount; i++) {
      const numbers = new RandomPick();
      let ticket = new Lotto(await numbers.getRandomNumber());
      lotto.push(ticket);
    }
    const winNumber = new WinInput(await input.getWinNumber());
    const bonusNumber = new BonusInput(await input.getBonusNumber());
    for (let i = 0; i < lotto.length; i++) {
      checkLotto[i] = {
        lotto: lotto[i],
        win: lotto[i].compareWinNumbers(winNumber.win),
        bonus: lotto[i].compareBonusNumber(bonusNumber.bonus),
      };
    }
    let check = new Check();
    check.checkLotto(checkLotto,newMoney.payedMoney)
  }
}

export default App;
