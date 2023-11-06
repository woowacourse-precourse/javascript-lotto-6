import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

function getLottery(amount) {
  const LOTTERY_LIST = [];
  for (let i = 0; i < amount; i += 1) {
    const RANDOM_NUMBERS = Random.pickUniqueNumbersInRange(1, 45, 6);
    const LOTTERY = new Lotto(RANDOM_NUMBERS);
    LOTTERY.numbers.sort((a, b) => a - b);
    LOTTERY_LIST.push(LOTTERY.numbers);
  }

  return LOTTERY_LIST;
}

export default getLottery;
