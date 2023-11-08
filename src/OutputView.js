import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const OUTPUT_LOTTOS_COUNT_MESSAGE = '개를 구매했습니다.';
const OUTPUT_WINNING_STATISTICS_MESSAGE = '당첨 통계';
const OUTPUT_WINNING_LINE = '---';
const OUTPUT_WINNING_STATISTICS = {
  1: '3개 일치 (5,000원) - ',
  2: '4개 일치 (50,000) - ',
  3: '5개 일치 (1,500,000원) - ',
  4: '5개 일치, 보너스 볼 일치(30,000,000원) - ',
  5: '6개 일치 (2,000,000,000원) - ',
};
const OUTPUT_PROFIT_RATE = '총 수익률은';
const OUTPUT_PROFIT_RATE_UNIT = '%입니다.';
class OutputView {
  static printLottos(lottos) {
    Console.print(`${lottos.length}${OUTPUT_LOTTOS_COUNT_MESSAGE}`);
    lottos.forEach(lotto => {
      const sortedLotoNumber = this.sortLottoNumbers(lotto);
      this.printLottoNumbers(sortedLotoNumber);
    });
  }

  static printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }

  static sortLottoNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    lottoNumbers.sort((a, b) => a - b);
    return lottoNumbers;
  }

  static winnigDetail(rank, profitRate) {
    Console.print(OUTPUT_WINNING_STATISTICS_MESSAGE);
    Console.print(OUTPUT_WINNING_LINE);
    Console.print(`${OUTPUT_WINNING_STATISTICS[1]}${rank[1]}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[2]}${rank[2]}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[3]}${rank[3]}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[4]}${rank[4]}`);
    Console.print(`${OUTPUT_WINNING_STATISTICS[5]}${rank[5]}`);
    Console.print(`${OUTPUT_PROFIT_RATE} ${profitRate}${OUTPUT_PROFIT_RATE_UNIT}`);
  }
}

export default OutputView;
