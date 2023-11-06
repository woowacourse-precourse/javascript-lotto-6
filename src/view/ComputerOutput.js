import { print } from '../utils/missionUtils.js';
import { RESULT_MESSAGE } from '../constants/messages.js';

class ComputerOutput {
  static printLottoTicketCount(lottoTicketCount) {
    print(`\n${lottoTicketCount}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottoNumbers) {
    const formattedArray = lottoNumbers.map(
      (innerArray) => `[${innerArray.join(', ')}]`,
    );
    const printing = formattedArray.join('\n');

    print(printing);
  }

  static printWinningStats(rankCounts, profitPercentage) {
    print('');
    print('당첨통계');
    print('---');
    RESULT_MESSAGE.forEach((message, i) => {
      print(`${message[Object.keys(message)[0]] + rankCounts[i]}개`);
    });
    print(`총 수익률은 ${profitPercentage}%입니다.`);
  }
}

export default ComputerOutput;
