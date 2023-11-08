import Money from './Money.js';
import RandomPick from './RandomPick.js';
import Lotto from './Lotto.js';
import WinInput from './WinInput.js';
import Check from './Check.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import ExceptionList from './ExceptionList.js';
import BonusInput from './BonusInput.js';

class App {
  getPayedMoney = async () => {
    try {
      let payedMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      let exception = new ExceptionList();
      exception.noInputError(payedMoney);
      exception.isNaNError(payedMoney);
      exception.isZeroError(payedMoney);
      exception.notThousandError(payedMoney);
      return payedMoney;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.getPayedMoney();
    }
  };
  getWinNumber = async () => {
    try {
      const numberString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      let exception = new ExceptionList();
      exception.noInputError(numberString);
      let win = numberString.split(',');
      exception.LengthError(win);
      win.forEach((number) => {
        exception.isNaNError(number);
        exception.numberRangeError(number);
      });
      exception.sameNumberError(win);
      return numberString;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await getWinNumber();
    }
  };
  getBonusNumber = async () => {
    try {
      const bonus = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      let exception = new ExceptionList();
      exception.noInputError(bonus);
      exception.isNaNError(bonus);
      exception.numberRangeError(bonus);
      // exception.sameBonusError(win, bonus);
      return bonus;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.getBonusNumber();
    }
  };
  async play() {
    let payed = await this.getPayedMoney();
    let newMoney = new Money(payed);
    newMoney.printCalLottoCount();

    let lotto = [];
    let checkLotto = [];

    for (let i = 0; i < newMoney.lottoCount; i++) {
      const numbers = new RandomPick();
      let ticket = new Lotto(await numbers.getRandomNumber());
      lotto.push(ticket);
    }

    const winNumber = new WinInput(await this.getWinNumber());
    const bonusNumber = new BonusInput(await this.getBonusNumber());
    for (let i = 0; i < lotto.length; i++) {
      checkLotto[i] = {
        lotto: lotto[i],
        win: lotto[i].compareWinNumbers(winNumber.win),
        bonus: lotto[i].compareBonusNumber(bonusNumber.bonus),
      };
    }
    let check = new Check();
    checkLotto.forEach((item) => {
      check.checkCount(item);
    });
    check.earnTotal(check.countArray);
    check.calculateEarnRatio(newMoney.payedMoney);
    check.printCount(check.countArray);
    check.printEarnRatio();
  }
}

export default App;
