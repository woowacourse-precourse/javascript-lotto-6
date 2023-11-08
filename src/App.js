import { MissionUtils } from '@woowacourse/mission-utils';
import Converter from './Converter/Converter.js';
import Lotto from './Lotto/Lotto.js';
import LottoIntergrator from './Lotto/LottoIntergrator.js';
import Receiver from './Receiver/Receiver.js';

import Validator from './Validator/Validator.js';
import Printer from './Printer/Printer.js';

class App {
  #userMoney;

  #userSetLottoNums;

  #bonusNum;

  #lottos = new LottoIntergrator();

  async play() {
    this.#userMoney = await Receiver.receiveMoney();

    Validator.checkPurchaseAmount(this.#userMoney);

    this.#userMoney /= 1000;

    this.generateLottos();

    Printer.printPublishInfo(this.#userMoney, this.#lottos.allLottoInfo());

    this.#userSetLottoNums = Converter.stringToArray(await Receiver.receiveLottomNums());

    Validator.checkLottoNums(this.#userSetLottoNums);

    this.#bonusNum = await Receiver.receiveBonusNum();

    Validator.checkBonusNum(this.#bonusNum);

    console.log(this.#lottos.saveBoard(this.#userSetLottoNums, this.#bonusNum));
  }

  generateLottos() {
    for (let i = 0; i < this.#userMoney; i += 1) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      this.#lottos.pushLotto(new Lotto(lotto).getLotto());
    }
  }
}

export default App;
