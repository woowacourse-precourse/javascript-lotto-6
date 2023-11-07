import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE } from '../constants/message.js';
import { LOTTO_RESULT } from '../constants/lotto.js';
import { COMMON } from '../constants/common.js';

class OutputView {
  printLottosCount(count) {
    Console.print(PRINT_MESSAGE.lottosCount(count));
  }

  printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(PRINT_MESSAGE.lotto(lotto));
    });
  }

  getLottoResultDescription(rank) {
    let isSecond = COMMON.blank;

    if (rank.isSecond) isSecond = PRINT_MESSAGE.bonusNumber;

    return (
      PRINT_MESSAGE.includesCount(rank.includesCount) + isSecond + PRINT_MESSAGE.prize(rank.prize)
    );
  }

  printLottoResult(count) {
    Console.print(PRINT_MESSAGE.prizesDescription);
    Console.print(PRINT_MESSAGE.divide);

    const ranksKey = Object.keys(count).reverse();

    ranksKey.forEach((key) => {
      Console.print(
        this.getLottoResultDescription(LOTTO_RESULT[key]) + PRINT_MESSAGE.resultCount(count[key]),
      );
    });
  }

  printLottoReturns(returns) {
    Console.print(PRINT_MESSAGE.returns(returns));
  }
}

export default OutputView;
