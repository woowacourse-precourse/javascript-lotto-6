import { Console } from '@woowacourse/mission-utils';
import gameMessage from '../constants/gameMessages';

export default class Result {
  output(result, money) {
    let income = 0;
    Object.entries(result).forEach(([key, value]) => {
      income += parseInt(value.reward.replace(/,/g, ''), 10) * value.count;
      Console.print(
        gameMessage.OUTPUT.RESULT(value.match, value.reward, value.count),
      );
    });
    const rate = ((income / money) * 100).toFixed(1);
    Console.print(gameMessage.OUTPUT.INCOME(rate));
  }
}
