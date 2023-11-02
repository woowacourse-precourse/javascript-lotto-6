import { MissionUtils } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { Validate } from './Validate.js';
import Lotto from './Lotto.js';
import { PURCHASE_UNIT } from './constant.js';

class App {
  #lottos = [];

  async play() {
    await this.issueLottos();
    this.printLottosNumbers();
  }

  printLottosNumbers() {
    Message.printNumberOfLottos(this.#lottos.length);
    this.#lottos.forEach((lotto) => {
      Message.printLottoNumber(lotto.getNumbers());
    });
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
}

export default App;
