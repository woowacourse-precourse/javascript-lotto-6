import { Random, Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, ERROR_MESSAGE } from './constant.js';
import Lotto from './Lotto.js';

class App {
  static createLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async inputMoney() {
    let money;
    try {
      money = await Console.readLineAsync(LOTTO_MESSAGE.MONEY_INPUT);
      if (money % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE.MONEY);
      }
    } catch (error) {
      Console.print(error.message);
      this.inputMoney();
    }
    return money;
  }

  async play() {
    const lottos = [];
    const money = await this.inputMoney();
    const lottoNumber = money / 1000;
    Console.print(`${lottoNumber}개를 구매했습니다`);
    for (let i = 0; i < lottoNumber; i += 1) {
      const lotto = new Lotto(App.createLotto());
      lotto.printLotto();
      lottos.push(lotto);
    }
    const winningNumbers = (await Console.readLineAsync(LOTTO_MESSAGE.WINNING_INPUT))
      .split(',')
      .map((number) => Number(number));
    const bonusNumbers = Number(await Console.readLineAsync(LOTTO_MESSAGE.BONUS_INPUT));

    console.log(winningNumbers, bonusNumbers);
    Console.print(LOTTO_MESSAGE.WINNING_STATISTICS);
  }
}

export default App;
