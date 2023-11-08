import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../utils/constants/printMessages';
import { prizeFormatter, profitRateFormatter } from '../utils/formatters/formatters';

class OutputView {
  static printLottoCount(lottoCount) {
    Console.print(OUTPUT_MESSAGE.lottoCount(lottoCount));
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      Console.print(OUTPUT_MESSAGE.lottoNumbers(lottoNumbers));
    });
  }

  static printMatchResult(result) {
    this.printResultHeader();

    result.forEach((lottoCount, rank) => {
      Console.print(
        OUTPUT_MESSAGE.matchResult(
          rank.getMatchCount(),
          rank.getIsMatchBonus(),
          prizeFormatter.format(rank.getPrize()),
          lottoCount,
        ),
      );
    });
  }

  static printResultHeader() {
    Console.print(OUTPUT_MESSAGE.resultTitle);
    Console.print(OUTPUT_MESSAGE.resultDivider);
  }

  static printProfitRate(profitRate) {
    Console.print(`${OUTPUT_MESSAGE.profitRate(profitRateFormatter.format(profitRate))}`);
  }

  static printError(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
