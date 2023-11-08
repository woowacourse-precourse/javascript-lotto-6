import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { LOTTERY } from './constants.js';

export default class LottoManager {
  static issueLotto() {
    const randNum = Random.pickUniqueNumbersInRange(
      LOTTERY.MIN_NUM,
      LOTTERY.MAX_NUM,
      LOTTERY.NUM_COUNT,
    );

    try {
      return new Lotto(randNum);
    } catch (exception) {
      Console.print(exception.message);
    }
  }
}
