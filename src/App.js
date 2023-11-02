import { MissionUtils } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { Validate } from './Validate.js';
import Lotto from './Lotto.js';
import { PURCHASE_UNIT } from './constant.js';

class App {
  #lottos = [];

  async play() {
    const money = await Message.inputPurchasingAmount();
    Validate.purchasingMoney(money);
    const count = money / PURCHASE_UNIT;
    this.issueLottos(count);
    Message.printNumberOfLottos(count);
    this.#lottos.forEach((lotto) => {
      Message.printLottoNumber(lotto.getNumbers());
    });
  }

  issueLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
  }
}

export default App;
