import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_PRINT } from '../constants/Mesaage';

const OutputView = {
  printLottoAmount(lottoAmount) {
    Console.print(`${lottoAmount}${MESSAGE_PRINT.LOTTO_AMOUNT}`);
  },

  printMyLottoNumber(lottoNumber) {
    Console.print(
      `${MESSAGE_PRINT.LOTTO_NUMBER_HEAD}${lottoNumber}${MESSAGE_PRINT.LOTTO_NUMBER_TAIL}`,
    );
  },

  printResultStatistics(resultList) {
    Console.print(MESSAGE_PRINT.STATISTICS);

    // resultList는 객체 배열 { rank, count }
    resultList.forEach(result =>
      Console.print(
        `${MESSAGE_PRINT.MESSAGE_RESULT_STATISTICS[result.rank - 1]}${
          result.count
        }${MESSAGE_PRINT.COUNT_UNIT}`,
      ),
    );
  },

  printTotalRate(totalRate) {
    Console.print(
      `${MESSAGE_PRINT.TOTAL_RATE_HEAD}${totalRate}${MESSAGE_PRINT.TOTAL_RATE_TAIL}`,
    );
  },
};

export default OutputView;
