import { Console } from '@woowacourse/mission-utils';
import { PRIZE_KEY } from '../constants/constants.js';
import { OUTPUT_MESSAGE, STATISTIC_LABEL } from '../constants/messages.js';

class OutputView {
  printError(message) {
    Console.print(message);
  }

  /**
   * 구매한 로또의 장 수를 출력한다.
   * @param {number} amount - 구매한 로또의 장 수
   */
  printPurchaseAmount(amount) {
    Console.print(OUTPUT_MESSAGE.purchaseAmount(amount));
  }

  /**
   * 구매한 로또 티켓을 템플릿에 맞춰 출력한다.
   * @param { number[][] } purchasedLotto - 구매한 로또 티켓 숫자배열
   */
  printPurchasedLotto(purchasedLotto) {
    const lottos = purchasedLotto.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`${lottos}\n`);
  }

  /**
   * 당첨 통계를 템플릿에 맞춰 등수 라벨과 카운트를 출력한다.
   * @param { { prizeKey: string, count: number } } winsStatistics - 당첨 통계 정보를 담고 있는 객체
   */
  printWinsStatistics(winsStatistics) {
    Console.print(OUTPUT_MESSAGE.winsStatistic);

    Object.entries(winsStatistics).forEach(([prizeKey, count]) => {
      const label = STATISTIC_LABEL[prizeKey];

      Console.print(OUTPUT_MESSAGE.totalWinsStatistic(label, count));
    });
  }

  /**
   * 총 수익률을 출력한다.
   * @param {number} profitRatio - 수익률
   */
  printProfitRatio(profitRatio) {
    Console.print(OUTPUT_MESSAGE.totalProfitRatio(profitRatio));
  }
}

export default OutputView;
