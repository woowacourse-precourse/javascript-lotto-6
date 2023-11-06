// import { Console } from '@woowacourse/mission-utils';

import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../../constant/LottoMessage.js';
import LOTTO from '../../constant/Lotto.js';
import PRIZES from '../../constant/Prizes.js';
import addMoneyDelimiter from '../../utils/addMoneyDelimiter.js';

const Output = (superClass) =>
  class extends superClass {
    // TODO: 리펙터
    static printResultHeader() {
      Console.print(LOTTO_MESSAGE.resultHeader);
      Console.print(LOTTO_MESSAGE.resultHeaderLine);
    }

    static printLottoCount(count) {
      Console.print(LOTTO_MESSAGE.lottoCount(count));
    }

    static printLottos(lottos) {
      const message = [];

      // TODO: 뎁스 정리
      lottos.forEach((lotto) =>
        message.push(
          `${LOTTO_MESSAGE.startMark}${lotto.join(LOTTO_MESSAGE.delimiter)}${
            LOTTO_MESSAGE.endMark
          }`,
        ),
      );

      // TODO: 개행 상수화
      Console.print(message.join('\n'));
    }

    static printYieldRate(yieldRate) {
      Console.print(LOTTO_MESSAGE.yield(yieldRate));
    }

    static printPrizeCount(prizeCount) {
      const message = [];

      prizeCount.forEach((matchCount, i) => {
        if (i < prizeCount.length - 2) {
          message.push(
            LOTTO_MESSAGE.resultCount(
              LOTTO.minMatchCount + i,
              addMoneyDelimiter(PRIZES[i]),
              matchCount,
            ),
          );
        } else if (i === prizeCount.length - 2) {
          message.push(
            LOTTO_MESSAGE.resultBonusCount(
              LOTTO.count - 1,
              addMoneyDelimiter(PRIZES[i]),
              matchCount,
            ),
          );
        } else if (i === prizeCount.length - 1) {
          message.push(
            LOTTO_MESSAGE.resultCount(
              LOTTO.count,
              addMoneyDelimiter(PRIZES[i]),
              matchCount,
            ),
          );
        }
      });

      Console.print(message.join('\n'));
    }
  };

export default Output;
