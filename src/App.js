import Money from './Money.js';
import RandomPick from './RandomPick.js';
import Lotto from './Lotto.js';
import InputNumber from './InputNumber.js';
import Check from './Check.js';

class App {
  async play() {
    const newMoney = new Money();
    await newMoney.init();
    let lotto = [];
    let checkLotto = [];

    for (let i = 0; i < newMoney.lottoCount; i++) {
      const numbers = new RandomPick();
      let ticket = new Lotto(await numbers.getRandomNumber());
      lotto.push(ticket);
    }

    const lottoNumber = new InputNumber();
    await lottoNumber.getWinNumber();
    await lottoNumber.getBonusNumber();

    for (let i = 0; i < lotto.length; i++) {
      checkLotto[i] = {
        lotto: lotto[i],
        win: lotto[i].compareWinNumbers(lottoNumber.win),
        bonus: lotto[i].compareBonusNumber(lottoNumber.bonus),
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
