import { MissionUtils } from '@woowacourse/mission-utils';
import REGEXP from '../constants/RegExp.js';
import { BalanceTypeError } from '../error/Errors.js';
import Lotto from './Lotto.js';
import { SETTINGS } from '../constants/Settings.js';

class User {
  #balance;
  #lottos;

  constructor(balance) {
    this.#validate(balance);
    this.#balance = balance;
    this.#lottos = [];
  }

  #validate(number) {
    if (!REGEXP.balance.test(number)) {
      throw new BalanceTypeError(number);
    }
  }

  buyLottos() {
    const amount = Number(this.#balance) / SETTINGS.lottoPrice;
    for (let counter = 0; counter < amount; counter++) {
      this.#lottos.push(new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  getLottos() {
    const lottoNumbers = []
    this.#lottos.forEach((lotto) => {
      lottoNumbers.push(lotto.getNumbers());
    });

    return lottoNumbers;
  }
}

export default User;
