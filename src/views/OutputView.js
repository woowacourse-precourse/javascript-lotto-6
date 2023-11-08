import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../utils/constants.js';

const OutputView = {
  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  },

  printLotto(lottoTicket) {
    lottoTicket.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  },

  printLottoResult(lottoResult) {
    Console.print(OUTPUT_MESSAGE.LOTTO_TICKET_RESULT);
    lottoResult.forEach((result, index) => {
      Console.print(`${OUTPUT_MESSAGE.REWARD[index]} - ${result}개`);
    });
  },

  printReturnRate(returnRate) {
    Console.print(
      `총 수익률은 ${returnRate.toLocaleString(undefined, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      })}%입니다.`
    );
  },
};

export default OutputView;
