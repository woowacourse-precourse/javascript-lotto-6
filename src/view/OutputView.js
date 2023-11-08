import { Console } from '@woowacourse/mission-utils';
import { PRIZE_MESSAGE, GUIDE_MESSAGE } from '../constants/message.js';

class OutputView {
  static printPurchaseAmount(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  }

  static printNumbers(lottos) {
    lottos.forEach(lotto => {
      const numbersString = lotto.getNumbers().join(', ');
      Console.print(`[${numbersString}]`);
    });
    Console.print('');
  }

  static printPrize(prize) {
    Console.print(GUIDE_MESSAGE.prize);
    for (const key in PRIZE_MESSAGE) {
      Console.print(PRIZE_MESSAGE[key] + prize[key] + '개');
    }
  }

  static printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
