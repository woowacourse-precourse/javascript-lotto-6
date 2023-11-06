import { Console } from '@woowacourse/mission-utils';
import WinningStatistic from './WinningStatistic.js';
const MESSAGE_WINNING_STATISTICS = '당첨 통계\n---';

class LottoView {
  static async getUserInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  static printStatistics(winningStatistics) {
    Console.print(MESSAGE_WINNING_STATISTICS);
    Console.print(
      `3개 일치 (5,000원) - ${winningStatistics.getFifthPrize()}개`
    );
    Console.print(
      `4개 일치 (50,000원) - ${winningStatistics.getFourthPrize()}개`
    );
    Console.print(
      `5개 일치 (1,500,000원) - ${winningStatistics.getThirdPrize()}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics.getSecondPrize()}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${winningStatistics.getFirstPrize()}개`
    );
    Console.print(`총 수익률은 ${winningStatistics.getEaringRate()}%입니다.`);
  }
}
export default LottoView;
