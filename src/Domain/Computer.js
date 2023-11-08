import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../Constant/stats';

class Computer {
  getLotteryNumbers(numbers) {
    const lotteryNumbersArray = Array.from({ length: numbers }, () => {
      const random = Random.pickUniqueNumbersInRange(
        NUMBER.MIN,
        NUMBER.MAX,
        NUMBER.COUNT
      );
      return random.sort((a, b) => a - b);
    });

    return lotteryNumbersArray;
  }
}

export default Computer;
