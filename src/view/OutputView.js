import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages';
import { WINNING_DESCRIPTION } from '../constants/winning';
import { SYMBOL } from '../constants/symbol';
import { MAGIC_NUMBER } from '../constants/number';

class OutputView {
  static printLotto(purchaseLotto) {
    const lottoCount = purchaseLotto.length;

    Console.print(`${OUTPUT_MESSAGE.enter}${lottoCount}${OUTPUT_MESSAGE.purchase}`);
    purchaseLotto.forEach((num) => Console.print(`[${num.join(SYMBOL.comma).toString()}]`));
  }

  static printWinningStatistics(winnings) {
    Console.print(`${OUTPUT_MESSAGE.result}${SYMBOL.contour}`);
    WINNING_DESCRIPTION.slice(MAGIC_NUMBER.zero, MAGIC_NUMBER.rank).forEach(
      (description, index) => {
        Console.print(`${description} - ${winnings[index]}${OUTPUT_MESSAGE.count}`);
      }
    );
  }

  static printRevenueRate(rate) {
    Console.print(`${OUTPUT_MESSAGE.totalProfit}${rate.toFixed(1)}${OUTPUT_MESSAGE.percentage}`);
  }
}

export default OutputView;
