import { Random, Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, ERROR_MESSAGE } from './constant.js';
import Lotto from './Lotto.js';

class App {
  createLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async inputMoney() {
    try {
      const money = await Console.readLineAsync(LOTTO_MESSAGE.MONEY_INPUT);
      if (money % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE);
      }
    } catch (error) {}
  }

  async play() {
    const money = await this.inputMoney();
    console.log(this.createLotto());
  }
}

export default App;
