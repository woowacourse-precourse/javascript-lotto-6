import { Console } from '@woowacourse/mission-utils';

import { CONSOLE_MESSAGE } from './../constants/constants';
import { addComma } from './../utils/addComma';

class OutputView {
  static printError(message) {
    Console.print(message);
  }

  static printPurchaseCount(count) {
    Console.print(`${count}${CONSOLE_MESSAGE.PURCHASED_MESSAGE}`);
  }

  static printLotto(lotto) {
    const lottoNumbers = lotto.join(', ');

    Console.print(`[${lottoNumbers}]`);
  }

  static printMatchResult() {
    Console.print('당첨 통계');
  }

  static printSeparator() {
    Console.print('---');
  }

  static printPrizeResult(matchText, matchPrize, matchCount) {
    Console.print(`${matchText} (${addComma(matchPrize)}원) - ${matchCount}개`);
  }

  static printTotalProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
