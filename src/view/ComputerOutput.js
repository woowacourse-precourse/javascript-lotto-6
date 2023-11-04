import { print } from '../utils/missionUtils.js';
import { RESULT_MESSAGE } from '../constants/messages.js';

class ComputerOutput {
  static printLottoTicketCount(lottoTicketCount) {
    print(`${lottoTicketCount}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottoNumbers) {
    const formattedArray = lottoNumbers.map(
      (innerArray) => `[${innerArray.join(', ')}]`,
    );
    const printing = formattedArray.join('\n');

    print(printing);
  }

  static printWinningStats(rankCounts) {
    print('당첨통계');
    print('---');
    RESULT_MESSAGE.forEach((message) => {
      let i = 0;
      print(message + rankCounts[i]);
      i += 1;
    });
  }

  static printTotalProfitPercentage(profitPercentage) {
    print(`총 수익률은 ${profitPercentage}%입니다.`);
  }
}

export default ComputerOutput;
