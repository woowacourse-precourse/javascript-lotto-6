import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages';
import { WINNING_DESCRIPTION } from '../constants/winning';
import { SYMBOL } from '../constants/symbol';

class OutputView {
  static printLotto(purchaseLotto) {
    const lottoCount = purchaseLotto.length;

    Console.print(`${OUTPUT_MESSAGE.enter}${lottoCount}${OUTPUT_MESSAGE.purchase}`);
    purchaseLotto.forEach((num) => Console.print(`[${num.join(SYMBOL.comma).toString()}]`));
  }

  static printWinningStatistics(winnings) {
    Console.print(`${OUTPUT_MESSAGE.enter}${OUTPUT_MESSAGE.result}`);
    Console.print(`${SYMBOL.contour}`);
    for (let i = 0; i < 5; i++) {
      Console.print(`${WINNING_DESCRIPTION[i]} - ${winnings[i]}${OUTPUT_MESSAGE.count}`);
    }
  }

  static printRevenueRate(rate) {
    Console.print(`${OUTPUT_MESSAGE.totalProfit}${rate.toFixed(1)}${OUTPUT_MESSAGE.percentage}`);
  }
}

export default OutputView;
