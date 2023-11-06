import { Console, Random } from '@woowacourse/mission-utils';
import { LOTTERY } from './constants.js';
import Lotto from './Lotto.js';
import UserInput from './UserInput.js';

export default class Computer {
  constructor() {
    this.resetLotto();
  }

  async issueLottoForUserInput() {
    const purchaseAmount = await UserInput.getPurchaseAmount();
    const lottoCnt = purchaseAmount / 1000;
    for (let count = 0; count < lottoCnt; count++) {
      this.issueLotto();
    }
  }

  issueLotto() {
    const randNum = Random.pickUniqueNumbersInRange(
      LOTTERY.MIN_NUM,
      LOTTERY.MAX_NUM,
      LOTTERY.NUM_COUNT,
    );

    this.lottos.push(new Lotto(randNum));
  }

  resetLotto() {
    this.winningNumbers = [];
    this.lottos = [];
  }
}
