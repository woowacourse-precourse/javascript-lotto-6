import { MissionUtils } from '@woowacourse/mission-utils';
import REGEXP from '../constants/RegExp.js';
import { BalanceTypeError } from '../error/CustomErrors.js';
import Lotto from './Lotto.js';
import { SETTINGS } from '../constants/Settings.js';

class User {
  #balance;
  #lottos;
  #prizes;

  constructor(balance) {
    this.#validate(balance);
    this.#balance = balance;
    this.#lottos = [];
    this.#prizes = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }
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
    const lottoNumbers = [];
    this.#lottos.forEach((lotto) => {
      lottoNumbers.push(lotto.getNumbers());
    });

    return lottoNumbers;
  }

  setPrizes(winningLotto) {
    this.#lottos.forEach((lotto) => {
      const prize = lotto.getPrize(winningLotto.getNumbers(), winningLotto.getBonus());
      this.#prizes[prize] += 1;
    });
  }

  getPrizes() {
    return this.#prizes;
  }

  getReturnRate() {
    const returns =
      SETTINGS.fifthPrize * this.#prizes[5]
      + SETTINGS.foutrh * this.#prizes[4]
      + SETTINGS.thirdPrize * this.#prizes[3]
      + SETTINGS.secondPrize * this.#prizes[2]
      + SETTINGS.firstPrize * this.#prizes[1]
    const returnRate = returns / this.#balance * 100

    return returnRate;
  }
}

export default User;
