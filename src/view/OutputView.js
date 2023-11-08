import { Console } from '@woowacourse/mission-utils';

const OUTPUT_LOTTOS_COUNT_MESSAGE = '개를 구매했습니다.';
const OUTPUT_WINNING_STATISTICS_MESSAGE = '당첨 통계';
const OUTPUT_WINNING_LINE = '---';
const OUTPUT_WINNING_STATISTICS = {
  5: '3개 일치 (5,000원) - ',
  4: '4개 일치 (50,000원) - ',
  3: '5개 일치 (1,500,000원) - ',
  2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  1: '6개 일치 (2,000,000,000원) - ',
};
const OUTPUT_WINNING_STATISTICS_UNIT = '개';
const OUTPUT_PROFIT_RATE = '총 수익률은';
const OUTPUT_PROFIT_RATE_UNIT = '%입니다.';
class OutputView {
  static printLottos(lottos) {
    Console.print(`${lottos.length}${OUTPUT_LOTTOS_COUNT_MESSAGE}`);
    lottos.forEach(lotto => {
      this.printLottoNumbers(lotto);
    });
  }

  static printLottoNumbers(numbers) {
    const sortedLottoNumbers = numbers.sort((a, b) => a - b);
    Console.print(`[${sortedLottoNumbers.join(', ')}]`);
  }

  static winnigDetail(rank, profitRate) {
    Console.print(OUTPUT_WINNING_STATISTICS_MESSAGE);
    Console.print(OUTPUT_WINNING_LINE);
    Console.print(`${OUTPUT_WINNING_STATISTICS[5]}${rank[5]}${OUTPUT_WINNING_STATISTICS_UNIT}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[4]}${rank[4]}${OUTPUT_WINNING_STATISTICS_UNIT}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[3]}${rank[3]}${OUTPUT_WINNING_STATISTICS_UNIT}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[2]}${rank[2]}${OUTPUT_WINNING_STATISTICS_UNIT}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[1]}${rank[1]}${OUTPUT_WINNING_STATISTICS_UNIT}`);
    Console.print(`${OUTPUT_PROFIT_RATE} ${profitRate}${OUTPUT_PROFIT_RATE_UNIT}`);
  }
}

export default OutputView;
