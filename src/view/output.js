import { Console } from '@woowacourse/mission-utils';
import { LOTTO } from '../config.js';

const MESSAGE = Object.freeze({
  TOTAL_LOTTO_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  LOTTO_NUMBER: (numbers) => `[${numbers.join(', ')}]`,
  WINNING_STATISTICS: '당첨 통계',
  WINNING_COUNT: (amount, count) => `(${amount.toLocaleString()}원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});
export default class Output {
  static purchasedLottoNumbers(lottos) {
    Console.print(MESSAGE.TOTAL_LOTTO_COUNT(lottos.length));
    lottos.forEach(Output.lottoNumbers);
  }
  static lottoNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const output = MESSAGE.LOTTO_NUMBER(lottoNumbers);

    Console.print(output);
  }

  static winningStatistics(result) {
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = LOTTO.WIN;

    Console.print('\n당첨 통계');
    Console.print('---------');
    Console.print(`3개 일치 ${MESSAGE.WINNING_COUNT(FIFTH, result[FIFTH])}`);
    Console.print(`4개 일치 ${MESSAGE.WINNING_COUNT(FOURTH, result[FOURTH])}`);
    Console.print(`5개 일치 ${MESSAGE.WINNING_COUNT(THIRD, result[THIRD])}`);
    Console.print(`5개 일치, 보너스 볼 일치 ${MESSAGE.WINNING_COUNT(SECOND, result[SECOND])}`);
    Console.print(`6개 일치 ${MESSAGE.WINNING_COUNT(FIRST, result[FIRST])}`);
  }

  static profitRate(rate) {
    Console.print(MESSAGE.PROFIT_RATE(rate));
  }
}
