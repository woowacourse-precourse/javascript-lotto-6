import { MissionUtils } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { Validate } from './Validate.js';
import Lotto from './Lotto.js';
import { PURCHASE_UNIT } from './constant.js';

class App {
  #lottos = [];
  #winningLotteryNumber;
  #bonusNumber;

  async play() {
    await this.issueLottos();
    this.printLottosNumbers();
    await this.inputWinningLotteryNumbers();
  }

  async issueLottos() {
    const money = await Message.inputPurchasingAmount();
    Validate.purchasingMoney(money);
    const count = money / PURCHASE_UNIT;

    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  printLottosNumbers() {
    Message.printNumberOfLottos(this.#lottos.length);
    this.#lottos.forEach((lotto) => {
      Message.printLottoNumber(lotto.getNumbers());
    });
  }

  async inputWinningLotteryNumbers() {
    const value = await Message.inputWinningLotteryNumbers();
    const numbers = value.split(',');
    Validate.winningLottery(numbers);
    this.#winningLotteryNumber = numbers;
  }

  async inputBonusNumber() {
    const number = await Message.inputBonusNumber();
    Validate.bonusNumber(number, this.#winningLotteryNumber);
    this.#bonusNumber = number;
  }
}

export default App;
