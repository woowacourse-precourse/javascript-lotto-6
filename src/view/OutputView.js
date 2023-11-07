import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

class OutputView {
  static async printNewLine() {
    Console.print('');
  }

  static async printPurchaseLottoCount(count) {
    Console.print(count + OUTPUT_MESSAGE.purchaseLottoCount);
  }

  static async printLottoNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);

    Console.print(sortedNumbers);
  }

  static async printStatistics(results) {
    Console.print(OUTPUT_MESSAGE.statistics);
    Console.print(OUTPUT_MESSAGE.divider);

    Console.print(
      `3개 일치 (5,000원) - ${results[4]}개
4개 일치 (50,000원) -  ${results[3]}개
5개 일치 (1,500,000원) -  ${results[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) -  ${results[1]}개
6개 일치 (2,000,000,000원) -  ${results[0]}개`,
    );
  }

  static async printTotalProfitRate(totalProfitRate) {
    Console.print(`총 수익률을 ${totalProfitRate}%입니다.`);
  }
}

export default OutputView;
