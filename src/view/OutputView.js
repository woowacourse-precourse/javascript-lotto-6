import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE } from '../constants/message.js';
import { LOTTO_RESULT } from '../constants/lotto.js';
import { utils } from '../utils/utils.js';

class OutputView {
  static printLottosCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  static printLottoResult(count) {
    Console.print(PRINT_MESSAGE.prizesDescription);
    Console.print(PRINT_MESSAGE.divide);

    const ranksKey = Object.keys(LOTTO_RESULT).reverse();

    ranksKey.forEach((key) => {
      const rank = LOTTO_RESULT[key];
      let isSecond = '';

      if (rank.matchBonus) isSecond = ', 보너스 볼 일치';

      Console.print(
        `${rank.matchCount}개 일치${isSecond} (${utils.numberFormat(rank.prize)}원) - ${
          count[key]
        }개`,
      );
    });
  }

  static printLottoReturns(returns) {
    Console.print(`총 수익률은 ${returns}%입니다.`);
  }
}

export default OutputView;
