import { Console } from '@woowacourse/mission-utils';

import { OUTPUT } from '../constants/message/io.js';

class OutputView {
  static printErrorMessage(error) {
    Console.print(`${error}\n`);
  }

  static printPurchaseMessage(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  static printIssuedLottoNumbers(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }

  static printStatisticsHeader() {
    Console.print(OUTPUT.statisticsMessage);
  }

  static printStatistics(statistics) {
    const resultBoard = Object.values(statistics);

    resultBoard.forEach(result => {
      const { match, bonus, count, prize } = result;
      Console.print(
        `${match}개 일치${
          bonus ? `, ${OUTPUT.bonusMessage}` : ''
        } (${prize.toLocaleString()}원) - ${count}개`,
      );
    });
  }

  static printTotalRevenueRate(totalRevenueRate) {
    Console.print(`총 수익률은 ${totalRevenueRate}%입니다.`);
  }
}

export default OutputView;
