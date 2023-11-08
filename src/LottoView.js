import { Console } from '@woowacourse/mission-utils';
import { ENTER_MESSAGE } from './constants/message.js';
class LottoView {
  static async getUserInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }

  static printStatistics(winningStatistics) {
    Console.print(ENTER_MESSAGE.winning_statistics);
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

  static printLottoBundle(lottoBundle) {
    Console.print(`\n${lottoBundle.length}개를 구매했습니다.`);
    lottoBundle.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static printMessage(message) {
    Console.print(message);
  }
}
export default LottoView;
