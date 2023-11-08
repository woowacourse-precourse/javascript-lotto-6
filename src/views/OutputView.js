import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_PRINT, MESSAGE_RESULT_STATISTICS } from '../constants/Message';

const OutputView = {
  printLottoCount(lottoCount) {
    Console.print(`${lottoCount}${MESSAGE_PRINT.LOTTO_COUNT}`);
  },

  printLottoNumbers(lottoNumbers) {
    Console.print(
      `${MESSAGE_PRINT.LOTTO_NUMBER_HEAD}${lottoNumbers}${MESSAGE_PRINT.LOTTO_NUMBER_TAIL}`,
    );
  },

  printResultStatistics(results) {
    Console.print(MESSAGE_PRINT.STATISTICS);

    Object.keys(results).forEach(key =>
      Console.print(`${MESSAGE_RESULT_STATISTICS[key]}${results[key]}${MESSAGE_PRINT.COUNT_UNIT}`),
    );
  },

  printTotalRate(totalRate) {
    Console.print(
      `${MESSAGE_PRINT.TOTAL_RATE_HEAD}${Number(totalRate).toLocaleString()}${
        MESSAGE_PRINT.TOTAL_RATE_TAIL
      }`,
    );
  },

  printErrorMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
