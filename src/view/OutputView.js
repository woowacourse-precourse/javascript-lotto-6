import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE } from '../constants/message.js';
import { LOTTO_RESULT } from '../constants/lotto.js';

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
    if (rank.hasBonusNumber)
      return PRINT_MESSAGE.containBonusNumberResultDescription(rank.includesCount, rank.prize);

    return PRINT_MESSAGE.resultDescription(rank.includesCount, rank.prize);
  }

  printLottoResult(count) {
    Console.print(PRINT_MESSAGE.prizesDescription);
    Console.print(PRINT_MESSAGE.divide);

    const ranks = Object.keys(count).reverse();

    ranks.forEach((rank) => {
      Console.print(
        this.getLottoResultDescription(LOTTO_RESULT[rank]) + PRINT_MESSAGE.resultCount(count[rank]),
      );
    });
  }

  printLottoReturns(returns) {
    Console.print(PRINT_MESSAGE.returns(returns));
  }
}

export default OutputView;
