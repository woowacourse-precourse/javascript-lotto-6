import { Random } from '@woowacourse/mission-utils';

class Computer {
  getLotteryNumbers(numbers) {
    const lotteryNumbersArray = Array.from({ length: numbers }, () => {
      const random = Random.pickUniqueNumbersInRange(1, 45, 6);
      return random.sort((a, b) => a - b);
    });

    return lotteryNumbersArray;
  }
}

export default Computer;
