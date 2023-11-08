import { Console } from '@woowacourse/mission-utils';
import gameMessage from '../constants/gameMessages';
import constant from '../constants/constant';

export default class Result {
  output(result, money) {
    let income = 0;
    Object.entries(result).forEach(([key, value]) => {
      income += parseInt(value.reward.replace(/,/g, '')) * value.count;
      Console.print(
        gameMessage.OUTPUT.RESULT(value.match, value.reward, value.count),
      );
    });
    const rate = ((income / money) * constant.HUNDRED).toFixed(constant.ROUND);
    Console.print(gameMessage.OUTPUT.INCOME(rate));
  }
}
