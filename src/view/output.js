import { Console } from '@woowacourse/mission-utils';
import { LOTTO, OUTPUT_MESSAGE } from '../constants/index.js';

export default class Output {
  static purchasedLottosNumber(lottos) {
    Console.print(OUTPUT_MESSAGE.TOTAL_LOTTO_COUNT(lottos.length));
    lottos.forEach(Output.printLottoNumbers);
  }
  static printLottoNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    Console.print(OUTPUT_MESSAGE.LOTTO_NUMBER(lottoNumbers));
  }

  static printStatistics(statistics) {
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = LOTTO.WINNING;

    Console.print(OUTPUT_MESSAGE.STATISTICS);
    Console.print('---------');
    Console.print(`${FIFTH.COUNT}개 일치 ${OUTPUT_MESSAGE.WINNING_COUNT(FIFTH.PRIZE, statistics[FIFTH])}`);
    Console.print(`${FOURTH.COUNT}개 일치 ${OUTPUT_MESSAGE.WINNING_COUNT(FOURTH.PRIZE, statistics[FOURTH])}`);
    Console.print(`${THIRD.COUNT}개 일치 ${OUTPUT_MESSAGE.WINNING_COUNT(THIRD.PRIZE, statistics[THIRD])}`);
    Console.print(
      `${SECOND.COUNT}개 일치, 보너스 볼 일치 ${OUTPUT_MESSAGE.WINNING_COUNT(SECOND.PRIZE, statistics[SECOND])}`,
    );
    Console.print(`${FIRST.COUNT}개 일치 ${OUTPUT_MESSAGE.WINNING_COUNT(FIRST.PRIZE, statistics[FIRST])}`);
  }

  static profitRate(rate) {
    Console.print(OUTPUT_MESSAGE.PROFIT_RATE(rate));
  }
}
